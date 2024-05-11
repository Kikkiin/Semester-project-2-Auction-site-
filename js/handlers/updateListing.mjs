import { getListing } from "../listings/read.mjs";
import { updateListing } from "../listings/update.mjs";

export async function displayUpdatedListing() {
  const form = document.querySelector("#updateListingForm");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const listing = await getListing(id);

    form.title.value = listing.title;
    form.media.value = listing.media;
    form.description.value = listing.description;
    form.endsAt.value = listing.endsAt;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      // console.log(profile);

      listing.id = id;

      // send to the API
      updateListing(listing);
    });
  }
}
