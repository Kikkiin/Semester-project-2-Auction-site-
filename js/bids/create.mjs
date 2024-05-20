import { API_BASE_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

export async function postBid(listingId, amount) {
  const url = `${API_BASE_URL}/auction/listings/${listingId}/bids`;
  console.log("Posting bid to URL:", url);
  try {
    const response = await customFetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response:", errorData);
      throw new Error(errorData.errors[0].message);
    }
    const responseData = await response.json();
    console.log("Bid post response:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error posting bid:", error);
    throw error;
  }
}
