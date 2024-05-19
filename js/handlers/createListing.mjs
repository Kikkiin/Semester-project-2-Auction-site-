import { createListing } from "../listings/create.mjs";

export function displayCreatedListing(listingData) {
  const form = document.querySelector("#createListingForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      // console.log(profile);

      // send to the API
      createListing(listing);
    });
  }
}
