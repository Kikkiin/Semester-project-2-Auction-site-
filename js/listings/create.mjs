import { API_BASE_URL } from "../auth/api.mjs";
import { API_LISTINGS_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";
import { displayListings } from "../ui/display.mjs";

// const action = "/auction/listings";

export async function createListing(listingData) {
  const createListingURL = API_BASE_URL + API_LISTINGS_URL;
  //   const accessToken = load("token");

  const response = await customFetch(createListingURL, {
    method: "POST",
    body: JSON.stringify(listingData),
  });

  if (!response.ok) {
    throw new Error("Failed to create listing");
  }

  const listing = await response.json();
  console.log(listing);

  return listing;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("listingForm");
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const media = document.getElementById("mediaURL").value;
    const endsAt = document.getElementById("endsAt").value;

    const listingData = {
      title: title,
      description: description,
      media: [
        {
          url: media,
          alt: "Image of listing " + title,
        },
      ],
      endsAt: endsAt,
    };

    try {
      const createdListing = await createListing(listingData);
      displayListings(createdListing);
    } catch (error) {
      console.error("Error creating listing:", error);
    }
  });
});

// export async function submitNewListing() {
//   try {

//     const createdListing = await createListing(listingData);
//     displayListings(createdListing); // Oppdater listen med den nye listingen
//   } catch (error) {
//     console.error("Error creating listing:", error);
//   }
// }
// Du kan plassere denne koden i en JS-fil som lastes når siden som inneholder skjemaet lastes.

// export async function submitNewListing() {
//   const title = document.getElementById("title").value;
//   const imageURL = document.getElementById("imageURL").value;
//   const description = document.getElementById("description").value;
//   const endsAt = document.getElementById("endsAt").value;

//   const listingData = {
//     title: title,
//     image: imageURL,
//     description: description,
//     endsAt: endsAt,
//   };

//   try {
//     const createdListing = await createListing(listingData);
//     console.log("Listing created:", createdListing);
//     alert("Listing created successfully!");
//     displayListings(createdListing);
//   } catch (error) {
//     console.error("Error creating listing:", error);
//     alert("Failed to create listing.");
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const submitBtn = document.getElementById("submitBtn");
//   if (submitBtn) {
//     submitBtn.addEventListener("click", submitNewListing);
//   }
// });

//DENNE ER IKKE MED FORELØPIG
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
