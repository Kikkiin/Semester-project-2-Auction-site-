// // bidFunctions.mjs
// import { postBid } from "../bids/read.mjs"; // Importer postBid funksjonen som du har definert for å håndtere POST request

// export function addBidForm(listingId) {
//   const form = document.createElement("form");
//   form.classList.add("bid-form");

//   const input = document.createElement("input");
//   input.type = "number";
//   input.placeholder = "Ditt bud (kr)";
//   input.required = true;
//   input.min = "1"; // Minimumsbud, kan endres etter behov

//   const submitButton = document.createElement("button");
//   submitButton.type = "submit";
//   submitButton.textContent = "Gi bud";
//   submitButton.classList.add("btn", "btn-primary");

//   form.appendChild(input);
//   form.appendChild(submitButton);

//   form.onsubmit = async (event) => {
//     event.preventDefault();
//     const amount = parseFloat(input.value);
//     if (amount > 0) {
//       try {
//         const bidResponse = await postBid(listingId, amount);
//         alert("Budet ditt er registrert: " + amount + " kr");
//         input.value = ""; // Reset input field
//       } catch (error) {
//         alert(
//           "Det oppstod en feil ved registrering av budet. Vennligst prøv igjen."
//         );
//       }
//     } else {
//       alert("Vennligst skriv inn et gyldig beløp");
//     }
//   };

//   return form;
// }
