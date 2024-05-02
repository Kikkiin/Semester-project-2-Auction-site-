import { API_BASE_URL } from "../auth/api.mjs";
import { API_LISTINGS_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

export async function removeListings(id) {
  const removeListingURL = `${API_BASE_URL}${API_LISTINGS_URL}/${id}`;

  const response = await customFetch(removeListingURL, {
    method: "DELETE",
  });

  const listing = await response.json();

  return listing;
}
