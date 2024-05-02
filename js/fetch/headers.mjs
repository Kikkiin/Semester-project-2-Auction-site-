import { API_KEY } from "../auth/api.mjs";
import { load } from "../storage/localStorage.mjs";
import { API_KEY } from "../auth/api.mjs";

export function headers(hasBody = false) {
  const headers = new Headers();

  const token = load("token");

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (hasBody) {
    headers.append("Content-Type", "Application/json");
  }

  return headers;
}
