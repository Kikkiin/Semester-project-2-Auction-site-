import { API_BASE_URL } from "../auth/api.mjs";
import { API_LISTINGS_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

export async function getListings() {
  const getListingURL = `${API_BASE_URL}${API_LISTINGS_URL}`;

  const response = await customFetch(getListingURL);

  const listing = await response.json();

  return listing;
}

export async function getListing(id) {
  const getListingURL = `${API_BASE_URL}${API_LISTINGS_URL}/${id}`;

  const response = await customFetch(getListingURL);

  const listing = await response.json();

  return listing;
}
