// // bidFunctions.mjs
// import { getBidsForListing } from "./bids.mjs"; // Importer getBidsForListing funksjonen som du har definert for å håndtere GET request

// export async function displayBids(listingId, container) {
//   try {
//     const bids = await getBidsForListing(listingId);
//     if (bids && bids.length > 0) {
//       const bidsList = document.createElement("ul");
//       bidsList.classList.add("list-of-bids");

//       bids.forEach((bid) => {
//         const bidItem = document.createElement("li");
//         bidItem.textContent = `Bud: ${bid.amount} kr, gitt av: ${bid.bidder.name}`;
//         bidsList.appendChild(bidItem);
//       });

//       container.appendChild(bidsList);
//     } else {
//       container.textContent = "Ingen bud funnet.";
//     }
//   } catch (error) {
//     console.error("Feil ved henting av bud:", error);
//     container.textContent = "Feil ved lasting av bud.";
//   }
// }
