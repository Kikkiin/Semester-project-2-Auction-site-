import { API_BASE_URL, API_PROFILE_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

export async function getCredits(name) {
  const creditsURL = `${API_BASE_URL}${API_PROFILE_URL}/${name}/credits`;
  try {
    const response = await customFetch(creditsURL);
    if (!response.ok) {
      throw new Error("Failed to fetch credits");
    }
    const creditsData = await response.json();
    return creditsData;
  } catch (error) {
    console.error("Error fetching credits:", error);
    throw error;
  }
}
