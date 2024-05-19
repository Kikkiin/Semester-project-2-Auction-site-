import { getCredits } from "../profile/credit.mjs";
import { load } from "../storage/localStorage.mjs";

document
  .getElementById("creditButton")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    const modal = document.getElementById("creditModal");
    const span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    // Henter brukernavnet fra lokal lagring
    const { name } = load("profile"); // Anta at dette laster brukernavnet fra lokal lagring
    console.log("Loaded profile name:", name);
    if (!name) {
      console.error("No user logged in");
      alert("No user logged in. Please log in.");
      return;
    }

    try {
      const creditsData = await getCredits(name);
      console.log("Fetched credits data:", creditsData);
      if (
        creditsData &&
        creditsData.data &&
        creditsData.data.credits !== undefined
      ) {
        document.getElementById("creditAmount").textContent =
          creditsData.data.credits;
      } else {
        console.log("Credits data structure:", creditsData);
        throw new Error("No credit data available");
      }
    } catch (error) {
      console.error("Error fetching credit information:", error);
      alert("Failed to fetch credit information. Please try again.");
    }
  });

////////
// I filen hvor du håndterer brukergrensesnittsinteraksjoner, f.eks., profile/handleUI.mjs
// import { getCredits } from "./api.mjs";  // Pass på å oppdatere stien etter behov

// export async function displayCredits() {
//     const { name } = load("profile");  // Anta at dette laster lagret brukerinfo fra lokal lagring
//     if (!name) {
//         console.log("No user logged in");
//         return;
//     }

//     try {
//         const creditsData = await getCredits(name);
//         document.getElementById("creditAmount").textContent = creditsData.credits;
//     } catch (error) {
//         console.error("Error displaying credits:", error);
//         alert("Failed to display credits. Please try again.");
//     }
// }

// document
//   .getElementById("creditButton")
//   .addEventListener("click", async function (event) {
//     event.preventDefault();
//     var modal = document.getElementById("creditModal");
//     var span = document.getElementsByClassName("close")[0];

//     modal.style.display = "block";
//     span.onclick = function () {
//       modal.style.display = "none";
//     };
//     window.onclick = function (event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     };

//     const name = "exampleUser"; // Erstatt med faktisk brukernavn om nødvendig
//     try {
//       const creditsData = await getCredits(name);
//       if (creditsData && creditsData.credits) {
//         document.getElementById("creditAmount").textContent =
//           creditsData.credits;
//       } else {
//         throw new Error("No credit data available");
//       }
//     } catch (error) {
//       console.error("Error fetching credit information:", error);
//       alert("Failed to fetch credit information. Please try again.");
//     }
//   });

///////////

// import { API_BASE_URL, API_PROFILE_URL } from "../auth/api.mjs";
// import { customFetch } from "../fetch/fetch.mjs";

// document.getElementById("creditButton").addEventListener("click", async function (event) {
//     event.preventDefault();
//     var modal = document.getElementById("creditModal");
//     var span = document.getElementsByClassName("close")[0];

//     modal.style.display = "block";
//     span.onclick = function () {
//         modal.style.display = "none";
//     };
//     window.onclick = function (event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     };

//     const name = "exampleUser"; // Erstatt med faktisk brukernavn om nødvendig
//     try {
//         const currentCredits = await getProfileCredits(name); // Hent kredittinformasjon
//         document.getElementById("creditAmount").textContent = currentCredits.data.credits; // Viser kredittene i modalen
//     } catch (error) {
//         console.error("Error fetching credit information:", error);
//         alert("Failed to fetch credit information. Please try again.");
//     }
// });

//////////////

// // Denne funksjonen erstatter direkte fetch-kall med et mer strukturert tilnærming
// async function getProfileCredits(name) {
//     const fetchUrl = `${API_BASE_URL}${API_PROFILE_URL}/${name}/credits`;
//     const response = await customFetch(fetchUrl);
//     if (!response.ok) {
//         throw new Error("Failed to fetch credit information");
//     }
//     return response.json();
// }

///////////////
// import { customFetch } from "../fetch/fetch.mjs";

// document
//   .getElementById("creditButton")
//   .addEventListener("click", async function (event) {
//     event.preventDefault();
//     var modal = document.getElementById("creditModal");
//     var span = document.getElementsByClassName("close")[0];

//     modal.style.display = "block";

//     span.onclick = function () {
//       modal.style.display = "none";
//     };

//     window.onclick = function (event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     };
//     try {
//       // Her antar vi at 'name' er brukernavnet som trengs for API-endepunktet
//       const name = "exampleUser"; // Erstatt med faktisk brukernavn om nødvendig
//       const response = await customFetch(
//         `https://v2.api.noroff.dev/auction/profiles/${name}/credits`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch credit information");
//       }
//       const data = await response.json();
//       console.log(data); // Konsolllogg dataen som er hentet fra API-et
//       document.getElementById("creditAmount").textContent = data.data.credits; // Oppdaterer kredittverdien i modalen
//     } catch (error) {
//       console.error("Error fetching credit information:", error);
//       alert("Failed to fetch credit information. Please try again.");
//     }
//     // Hent kredittinformasjon fra API og oppdater modalen
//     // Her kan du bruke en AJAX-forespørsel for å hente kredittinformasjonen
//     // og oppdatere #creditAmount med den faktiske kredittverdien
//   });
