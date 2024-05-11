import { getListings } from "../listings/read.mjs";
import { previewListing } from "./previewListing.mjs";

export async function displayListings(page, limit) {
  const container = document.querySelector("#listing-container");
  console.log(document.querySelector("#listing-container"));
  if (!container) {
    console.error("Listing container not found");
    return;
  }

  try {
    const response = await getListings(page, limit, "created", "desc");
    console.log("API Response:", response);
    const listings = response.data;

    listings.forEach((listing) => {
      const listingElement = previewListing(listing);
      container.appendChild(listingElement);
    });
  } catch (error) {
    console.error("Error fetching and displaying listings:", error);
  }
}

// function createListingElement(listing) {
//   const listingElement = document.createElement("div");
//   listingElement.classList.add("listing");

//   const title = document.createElement("h2");
//   title.textContent = listing.title;
//   listingElement.appendChild(title);

//   const description = document.createElement("p");
//   description.textContent = listing.description;
//   listingElement.appendChild(description);

//   // Add more elements as needed based on the Listing model

//   return listingElement;
// }

// import { getListings } from "../listings/read.mjs";
// import { previewListing } from "./previewListing.mjs";
// // import { createListing } from "../listings/create.mjs";

// export async function displayListings(newListing = null) {
//   const container = document.querySelector("#trending-listing-container");

//   if (!container) {
//     console.error("Listing container not found");
//     return;
//   }

//   // Clear the container to avoid duplicates
//   container.innerHTML = "";

//   if (newListing) {
//     // If a new listing is provided, display only this new listing
//     const listingHtml = previewListing(newListing);
//     container.appendChild(listingHtml);
//   } else {
//     // Otherwise, fetch and display all listings
//     try {
//       const response = await getListings();
//       if (response && response.data) {
//         response.data.forEach((listing) => {
//           const listingHtml = previewListing(listing);
//           container.appendChild(listingHtml);
//         });
//       } else {
//         console.error("No listings data received", response);
//       }
//     } catch (error) {
//       console.error("Error fetching listings:", error);
//     }
//   }
// }

//Nytt eksempel

// export async function displayListings() {
//   const response = await getListings();
//   const listings = response.data;
//   console.log(listings);

//   const container = document.querySelector("#trending-listing-container");
//   listings.forEach((listing) => {
//     container.appendChild(previewListing(listing));
//   });
// }

// export async function displayListings() {
//   const container = document.querySelector("#trending-listing-container");
//   if (!container) {
//     console.error("Listing container not found");
//     return;
//   }

//   const response = await getListings();
//   const listings = response.data;
//   listings.forEach((listing) => {
//     container.appendChild(previewListing(listing));
//   });
// }

// export async function displayListings(newListing = null) {
//   const container = document.querySelector("#trending-listing-container");
//   if (!container) {
//     console.error("Listing container not found");
//     return;
//   }

//   // Tøm container før oppdatering for å unngå duplikater
//   container.innerHTML = "";

//   if (newListing) {
//     container.appendChild(previewListing(newListing));
//   } else {
//     const response = await getListings();
//     if (response && response.data) {
//       // Sjekk om response og data er gyldige
//       const listings = response.data;
//       listings.forEach((listing) => {
//         container.appendChild(previewListing(listing));
//       });
//     } else {
//       console.error("No listings data received", response);
//     }
//   }
// }

// export async function displayListing(listing) {
//   const container = document.querySelector("#trending-listing-container");
//   if (container) {
//     const listingElement = previewListing(listing);
//     container.appendChild(listingElement); // Legg til den nye listingen i containeren
//   } else {
//     console.error("Container not found");
//   }
// }

// export function displayListing(listing) {
//   const container = document.querySelector("#trending-listing-container");
//   if (!container) {
//     console.error("Container for listings not found");
//     return;
//   }

//   const listingElement = previewListing(listing);
//   container.appendChild(listingElement);
// }
