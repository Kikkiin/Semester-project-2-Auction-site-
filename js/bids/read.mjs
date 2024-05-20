import { API_BASE_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

export async function getBidsForListing(id) {
  const bidsUrl = `${API_BASE_URL}/auction/listings/${id}?_bids=true`;
  console.log(`Fetching bids for listing ID: ${id}`);

  try {
    const response = await customFetch(bidsUrl);
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response:", errorData);
      throw new Error(errorData.message || "Failed to fetch bids");
    }

    const data = await response.json();
    console.log("Fetched bids:", data);
    return data;
  } catch (error) {
    console.error("Error fetching bids:", error);
    throw error;
  }
}
