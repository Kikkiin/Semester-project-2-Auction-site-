import { API_BASE_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";
// import { load } from "../storage/localStorage.mjs";
import { displaySearchResults } from "../ui/displaySearch.mjs";

export async function getListingsSearch(searchTerm) {
  const searchURL = `${API_BASE_URL}/auction/listings/search?q=${encodeURIComponent(searchTerm)}`;

  //   const token = load("token");

  const response = await customFetch(searchURL);

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const result = await response.json();
  console.log("API response:", result);
  return result.data;
}

export function setupSearchHandler() {
  document
    .getElementById("search-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const searchTerm = document.getElementById("search-input").value.trim();
      if (searchTerm) {
        try {
          const listings = await getListingsSearch(searchTerm);
          console.log("Search results:", listings);
          displaySearchResults(listings);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    });
}
