console.log("Script loaded");

// Anta at filnavnet er `details.js`
import { getListing } from "../listing/read.mjs";
import { getBidsForListing } from "../bids/create.mjs";

async function displayListingDetails(id) {
  const listingDetails = await getListing(id);
  console.log("Fetching listing;", listingDetails);

  const bids = await getBidsForListing(id);

  const container = document.getElementById("listing-detail-container");
  container.innerHTML = ""; // Tømmer containeren først for å unngå duplisering av innhold

  // Vis oppføringsdetaljer
  const title = document.createElement("h1");
  title.textContent = listingDetails.title;
  container.appendChild(title);

  // Vis bilde
  if (listingDetails.media && listingDetails.media.length > 0) {
    const img = document.createElement("img");
    img.src = listingDetails.media[0].url; // Anta at det første bildet i arrayet skal vises
    img.alt = listingDetails.media[0].alt || "Listing Image";
    img.style.width = "100%"; // Full bredde, kan justeres etter behov
    container.appendChild(img);
  }

  // Vis detaljert beskrivelse
  const description = document.createElement("p");
  description.textContent = listingDetails.description;
  container.appendChild(description);

  // Knapp for å gi bud
  const bidButton = document.createElement("button");
  bidButton.textContent = "Gi Bud";
  bidButton.onclick = function () {
    console.log("Bid button clicked!");
  };
  container.appendChild(bidButton);

  // Vis nylige bud
  const bidsTitle = document.createElement("h2");
  bidsTitle.textContent = "Nylige bud";
  container.appendChild(bidsTitle);

  const bidsList = document.createElement("ul");
  bids.forEach((bid) => {
    const bidItem = document.createElement("li");
    bidItem.textContent = `${bid.bidder.name}: ${bid.amount} $`;
    bidsList.appendChild(bidItem);
  });
  container.appendChild(bidsList);
}

// Få listingId fra URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log("Listing ID fetched from URL:", id);

if (id) {
  console.log("Calling displayListingDetails with ID:", id);
  displayListingDetails(id);
} else {
  console.error("No ID found in the URL");
}
