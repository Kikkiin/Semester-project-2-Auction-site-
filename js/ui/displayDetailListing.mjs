export async function displayDetailListing(listingId) {
  const container = document.querySelector("#detail-listing-container");

  if (!container) {
    console.error("Detail listing container not found");
    return;
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}${API_LISTINGS_URL}/${listingId}`
    );
    const listing = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch listing details");
    }

    container.innerHTML = ""; // Clear the container
    const listingDetailHtml = detailListing(listing);
    container.appendChild(listingDetailHtml);
  } catch (error) {
    console.error("Error fetching listing details:", error);
    container.textContent =
      "Error loading listing details. Please try again later.";
  }
}

function detailListing(listing) {
  const listingContainer = document.createElement("div");
  listingContainer.className = "listing-detail";

  const title = document.createElement("h2");
  title.textContent = listing.title;
  listingContainer.appendChild(title);

  const image = document.createElement("img");
  media.src = listing.media;
  media.alt = "Image of " + listing.title;
  listingContainer.appendChild(image);

  const description = document.createElement("p");
  description.textContent = listing.description;
  listingContainer.appendChild(description);

  return listingContainer;
}
