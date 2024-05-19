import { API_BASE_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

export async function postBid(listingId, amount) {
  const url = `${API_BASE_URL}/auction/listings/${listingId}/bids`;
  try {
    const response = await customFetch(url, {
      method: "POST",
      body: JSON.stringify({ amount }),
    });
    if (!response.ok) throw new Error("Failed to post bid");
    return await response.json();
  } catch (error) {
    console.error("Error posting bid:", error);
    throw error;
  }
}
