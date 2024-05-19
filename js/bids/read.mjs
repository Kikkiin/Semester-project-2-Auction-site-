import { API_BASE_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

export async function getBidsForListing(id) {
  const bidsUrl = `${API_BASE_URL}/auction/listings/${id}/bids`;
  console.log(`Fetching bids for listing ID: ${id}`);

  try {
    const response = await customFetch(bidsUrl);
    if (!response.ok) throw new Error("Failed to fetch bids");
    return await response.json();
  } catch (error) {
    console.error("Error fetching bids:", error);
    throw error;
  }
}
