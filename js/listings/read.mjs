import { API_BASE_URL } from "../auth/api.mjs";
import { API_LISTINGS_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

export async function getListings(
  page = 1,
  limit = 100,
  sortBy = "created",
  order = "desc"
) {
  const getListingURL = `${API_BASE_URL}${API_LISTINGS_URL}?page=${page}&limit=${limit}&sort=${sortBy}&order=${order}`;

  const response = await customFetch(getListingURL);

  const listing = await response.json();

  return listing;
}

// export async function getListing(id) {
//   const getListingURL = `${API_BASE_URL}${API_LISTINGS_URL}/${id}`;

//   const response = await customFetch(getListingURL);

//   const listing = await response.json();

//   return listing;
// }

export async function getListing(id) {
  const getListingURL = `${API_BASE_URL}${API_LISTINGS_URL}/${id}`;
  const response = await customFetch(getListingURL);
  if (!response.ok) {
    throw new Error("Failed to fetch listing");
  }
  const data = await response.json();
  return data.data; // Returner data-delen av responsen
}
