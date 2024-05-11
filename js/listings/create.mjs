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

  console.log("Sending this data to API:", listingData);

  const listing = await response.json();
  console.log(listing);

  return listing;
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Form submit event triggered");
  const form = document.getElementById("listingForm");
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const media = document.getElementById("mediaURL").value;
    const description = document.getElementById("description").value;
    const endsAt = document.getElementById("endsAt").value;

    const listingData = {
      title: title,
      media: [
        {
          url: media,
          alt: "Image of listing " + title,
        },
      ],
      description: description,
      tags: [tags],

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
