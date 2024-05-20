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

    // Get username from localstorage
    const { name } = load("profile");
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
