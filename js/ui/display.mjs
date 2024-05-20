import { getListings } from "../listings/read.mjs";
import { previewListing } from "./previewListing.mjs";
import { filterListingsBySearchTerm } from "../handlers/searchListings.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim();
    displayListings(1, 100, searchTerm);
  });

  displayListings(1, 100); // Initial visning
});

export async function displayListings(page, limit, searchTerm = "") {
  const container = document.querySelector("#listing-container");
  if (!container) {
    console.error("Listing container not found");
    return;
  }

  container.innerHTML = "";

  try {
    const response = await getListings(page, limit, "created", "desc");
    const listings = response.data;

    if (searchTerm) {
      listings = filterListingsBySearchTerm(listings, searchTerm);
    }

    listings.forEach((listing) => {
      const listingElement = previewListing(listing);
      container.appendChild(listingElement);
    });
  } catch (error) {
    console.error("Error fetching and displaying listings:", error);
  }
}
