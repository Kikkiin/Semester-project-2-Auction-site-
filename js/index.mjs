import { setRegisterFormListener } from "./register/register.mjs";
import { setLoginFormListener } from "./login/login.mjs";
import { logout } from "./logout/logout.mjs";
import { displayListings } from "./ui/display.mjs";
import { handleUpdateProfile } from "./ui/updateProfile.mjs";
import { setupSearchHandler } from "./handlers/searchListing.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
}

window.logout = logout;

document.addEventListener("DOMContentLoaded", () => {
  displayListings();

  if (document.getElementById("load-more-button")) {
    let currentPage = 1;
    document
      .getElementById("load-more-button")
      .addEventListener("click", () => {
        currentPage++;
        displayListings(currentPage, 5);
      });
  }

  if (document.getElementById("editProfile")) {
    handleUpdateProfile();
  }

  if (document.getElementById("search-form")) {
    setupSearchHandler();
  }
  if (document.getElementById("registration-form")) {
    setRegisterFormListener();
  }

  // Sjekk for innloggingsskjema og sett opp lytter
  if (document.getElementById("login-form")) {
    setLoginFormListener();
  }
});

//// TEST ////

// import { setRegisterFormListener } from "./register/register.mjs";
// import { setLoginFormListener } from "./login/login.mjs";
// import { logout } from "./logout/logout.mjs";
// import { displayListings } from "./ui/display.mjs";
// import { handleUpdateProfile } from "./ui/updateProfile.mjs";

// setRegisterFormListener();
// setLoginFormListener();

// const path = location.pathname;

// if (path === "/profile/login/") {
//   setLoginFormListener();
// } else if (path === "/profile/register/") {
//   setRegisterFormListener();
// }

// window.logout = logout;

// // import { setupSearchHandler } from "./handlers/searchListing.mjs";
// // setupSearchHandler();

// displayListings();

// handleUpdateProfile();

// let currentPage = 1;
// document.getElementById("load-more-button").addEventListener("click", () => {
//   currentPage++;
//   displayListings(currentPage, 5);
// });

// import { createListing } from "./listings/create.mjs";
// import { updateListings } from "./listings/update.mjs";
// import { removeListings } from "./listings/delete.mjs";
// import { getListing, getListings } from "./listings/read.mjs";
// import { updateProfile } from "./profile/update.mjs";
// import { updateListings } from "./listings/update.mjs";
// import { displayUpdatedListing } from "./handlers/updateListing.mjs";
// import { displayListingDetails } from "./ui/displayDetailListing.mjs";

// function getValidEndsAtDate() {
//   const today = new Date();
//   const sixMonthsFromNow = new Date(
//     today.getFullYear(),
//     today.getMonth() + 6,
//     today.getDate()
//   );
//   return sixMonthsFromNow.toISOString(); // Konverter til ISO 8601 format
// }

// createListing();

// createListing({
//   title: "Example",
//   endsAt: getValidEndsAtDate(),
// });
// .then((listing) => {
//   console.log("Example listing created on load:", listing);
// })
// .catch((error) => {
//   console.error("Failed to create example listing on load:", error);
// });

// updateListings({
//   id: "bbf2d246-dee4-4128-8b7e-8fcb3147dfc8",
//   title: "Create listing test is updated",
// });

// removeListings("e482b2a3-10d1-4947-9688-15c04f0ae623");

// getListings().then(console.log);

// getListing();

// getListing("4df8e20f-1160-4746-9ba1-67ab27dfd6c0").then(console.log);

// Funksjon for å hente og oppdatere hjemmesiden med de nyeste listings
// async function updateHomepageWithNewListings() {
//   try {
//     const response = await fetch(`${API_BASE_URL}/auction/listings`);
//     const data = await response.json();

//     // Implementer logikken for å oppdatere hjemmesiden med de nyeste listingsene
//     // For eksempel, legg til de nye listingsene på hjemmesiden
//   } catch (error) {
//     console.error("Feil ved henting av nyeste listings:", error);
//   }
// }

// Kall funksjonen etter at en ny listing er opprettet
// For eksempel etter at en listing er laget
// createNewListing().then(() => {
//   updateHomepageWithNewListings();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   displayListings();
// });

// updateListings();

// displayUpdatedListing();

// window.submitNewListing = submitNewListing;

// document.addEventListener("click", function (event) {
//   if (event.target.matches(".listing-link")) {
//     const listingId = event.target.dataset.listingId;
//     displayDetailListing(listingId);
//   }
// });

// window.getBidsForListing = getBidsForListing; // Gjør funksjonen tilgjengelig som en global variabel

// document.addEventListener("click", function (event) {
//   if (event.target.matches(".listing-link")) {
//     const listingId = event.target.dataset.listingId;
//     displayListingDetails(listingId);
//   }
// });
