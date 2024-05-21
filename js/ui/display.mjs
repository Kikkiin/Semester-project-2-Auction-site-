import { getListings } from "../listings/read.mjs";
import { previewListing } from "./previewListing.mjs";

export async function displayListings(page, limit) {
  const container = document.querySelector("#listing-container");
  if (!container) {
    console.error("Listing container not found");
    return;
  }

  try {
    const response = await getListings(page, limit, "created", "desc");
    const listings = response.data;

    listings.forEach((listing) => {
      const listingElement = previewListing(listing);
      container.appendChild(listingElement);
    });
  } catch (error) {
    console.error("Error fetching and displaying listings:", error);
  }
}
