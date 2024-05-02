// import { API_KEY } from "../auth/api.mjs";
import { API_BASE_URL } from "../auth/api.mjs";
import { API_LISTINGS_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

// const action = "/auction/listings";

export async function createListings(listingData) {
  const createListingURL = API_BASE_URL + API_LISTINGS_URL;
  //   const accessToken = load("token");

  const response = await customFetch(createListingURL, {
    method: "POST",
    body: JSON.stringify(listingData),
  });

  const listing = await response.json();
  //   console.log(listing);

  return listing;
}

// export async function createListings(title, content, image) {
//   const response = await fetch(API_LISTINGS_URL, {
//     headers: {
//       Authorization: `Bearer ${load("token")}`,
//       "X-Noroff-API-Key": API_KEY,
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({
//       title: title,
//       body: content,
//       media: { url: image, alt: "" },
//     }),
//   });
//   return await response.json();
// }

// import { API_KEY } from "../auth/api.mjs";
// import { load } from "../storage/localStorage.mjs";
