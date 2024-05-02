import { API_BASE_URL } from "../auth/api.mjs";
import { API_LISTINGS_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

export async function updateListings(listingData) {
  const updateListingURL = `${API_BASE_URL}${API_LISTINGS_URL}/${listingData.id}`;

  const response = await customFetch(updateListingURL, {
    method: "PUT",
    body: JSON.stringify(listingData),
  });

  const listing = await response.json();

  return listing;
}
