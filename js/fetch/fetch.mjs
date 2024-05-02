import { load } from "../storage/localStorage.mjs";
import { API_KEY } from "../auth/api.mjs";

export function headers() {
  const accessToken = load("token");

  return {
    Authorization: `Bearer ${accessToken}`,
    "X-Noroff-API-Key": API_KEY,
    "Content-Type": "application/json",
  };
}

export async function customFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
