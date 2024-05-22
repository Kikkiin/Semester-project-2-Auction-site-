import { getListing } from "../listings/read.mjs";
import { postBid } from "../bids/create.mjs";
import { getBidsForListing } from "../bids/read.mjs";
import { load } from "../storage/localStorage.mjs";

// see if the user is logged in
function isLoggedIn() {
  const token = load("token");
  return !!token; // Return token if it exist
}

async function displayListingDetails(id) {
  try {
    const listing = await getListing(id, { _bids: true });
    console.log("API response:", listing);
    const container = document.getElementById("listing-detail-container");
    if (!container) {
      console.error("Listing container not found");
      return;
    }
    container.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = listing.title;
    container.appendChild(title);

    if (listing.media && listing.media.length > 0) {
      const img = document.createElement("img");
      img.src = listing.media[0].url;
      img.alt = listing.media[0].alt || "Listing Image";
      img.style.width = "100%";
      img.classList.add("img-fluid", "mb-2", "w-50");
      img.classList.add("listing-image");
      container.appendChild(img);
    }

    const description = document.createElement("p");
    description.textContent = listing.description;
    container.appendChild(description);

    if (isLoggedIn()) {
      // add bid form
      const bidForm = document.createElement("form");
      bidForm.classList.add("bid-form");
      const bidInput = document.createElement("input");
      bidInput.type = "number";
      bidInput.placeholder = "Your bid ($)";
      bidInput.required = true;
      bidInput.min = "1";
      bidInput.classList.add("bid-input");
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "Give bid";
      submitButton.classList.add("bid-submit", "bg-custom");
      bidForm.appendChild(bidInput);
      bidForm.appendChild(submitButton);
      container.appendChild(bidForm);

      bidForm.onsubmit = async (event) => {
        event.preventDefault();
        const amount = parseFloat(bidInput.value);
        console.log("Bid amount:", amount);
        if (amount > 0) {
          try {
            const bidResponse = await postBid(id, amount);
            console.log("Bid response:", bidResponse);
            alert("Your bid is registered: " + amount + " $");
            bidInput.value = "";
            displayListingDetails(id);
          } catch (error) {
            console.error("Error posting bid:", error);
            alert(
              "An error occurred when registering the bid. Please try again."
            );
          }
        } else {
          alert("Please enter a valid amount");
        }
      };
    } else {
      const loginMessage = document.createElement("p");
      loginMessage.textContent = "You must be logged in to place a bid.";
      container.appendChild(loginMessage);
    }

    // Show the bid
    const bidContainer = document.createElement("div");
    bidContainer.classList.add("container", "col-4", "my-2", "text-center");
    container.appendChild(bidContainer);

    const bidBox = document.createElement("div");
    bidBox.classList.add(
      "custom-btn",
      "d-flex",
      "flex-column",
      "justify-content-center",
      "align-items-center",
      "rounded",
      "mx-3",
      "pt-1"
    );
    bidContainer.appendChild(bidBox);

    const listingBidsText = document.createElement("p");
    listingBidsText.classList.add("fs-7", "fw-bold");
    listingBidsText.innerHTML = `Current Bid:`;
    bidBox.appendChild(listingBidsText);

    const currentBid = document.createElement("h3");
    currentBid.classList.add("fs-1");

    try {
      const bidsResponse = await getBidsForListing(id);
      const bids = bidsResponse.data.bids;
      if (bids && bids.length > 0) {
        const highestBid = Math.max(...bids.map((bid) => bid.amount));
        currentBid.innerHTML = `$${highestBid}`;
      } else {
        currentBid.innerHTML = "$0";
      }
    } catch (error) {
      console.error("Error fetching bids:", error);
      currentBid.innerHTML = "Error fetching bids";
    }

    bidBox.appendChild(currentBid);

    if (isLoggedIn()) {
      const bidHistory = document.createElement("p");
      bidHistory.classList.add("text-center", "nav-btn", "p-1", "clickable");
      bidHistory.innerHTML = `Bid history (${listing._count.bids})`;
      bidContainer.appendChild(bidHistory);

      bidHistory.addEventListener("click", async function () {
        const modalElement = document.getElementById("bid-history-modal");
        const modal = new bootstrap.Modal(modalElement);
        const bidsResponse = await getBidsForListing(id);
        const bids = bidsResponse.data.bids;

        console.log("fetched bids for listing:", bids);

        const modalBody = document.getElementById("bid-history");
        modalBody.innerHTML = "";

        if (bids && bids.length > 0) {
          bids.forEach((bid) => {
            const listItem = document.createElement("li");
            listItem.style.listStyleType = "none";
            listItem.classList.add("my-2");
            listItem.innerHTML = `
              <div class="d-flex align-items-center">
                <img src="${bid.bidder.avatar.url}" alt="${bid.bidder.avatar.alt}" class="rounded-circle me-2" style="width: 40px; height: 40px;">
                <div class="row" style="width: 100%;">
                  <h6 class="m-0 col-8">${bid.bidder.name}</h6>
                  <p class="m-0 col-4">Amount: $${bid.amount}</p>
                </div>
              </div>
            `;
            modalBody.appendChild(listItem);
          });
        } else {
          modalBody.innerHTML = "<p>No bids yet.</p>";
        }

        modal.show();
      });
    }
  } catch (error) {
    console.error("Error displaying listing details:", error);
  }
}

// ListinUrl
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log("Listing ID fetched from URL:", id);

if (id) {
  console.log("Calling displayListingDetails with ID:", id);
  displayListingDetails(id);
} else {
  console.error("No ID found in the URL");
}
