import { API_BASE_URL } from "../auth/api.mjs";
import { API_PROFILE_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

export async function getProfiles() {
  const getProfileURL = `${API_BASE_URL}${API_PROFILE_URL}`;

  const response = await customFetch(getProfileURL);

  const profile = await response.json();

  return profile;
}

export async function getProfile(name) {
  const getProfileURL = `${API_BASE_URL}${API_PROFILE_URL}/${name}`;

  const response = await customFetch(getProfileURL);

  const profile = await response.json();

  return profile;
}
