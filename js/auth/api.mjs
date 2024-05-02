export const API_KEY = "bc516746-3162-4a4f-8c75-6a311008d4d3";

export const API_BASE_URL = "https://v2.api.noroff.dev";
export const LOGIN_URL = "/auth/login";
export const REGISTER_URL = "/auth/register";

export const API_LISTINGS_URL = "/auction/listings";
export const API_PROFILE_URL = "/auction/profiles";

export const API_KEY_URL = "/auth/create-api-key";

// import { load } from "../storage/localStorage.mjs";

// export async function getAPIKey() {
//   const response = await fetch(API_BASE_URL + API_KEY_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${load("token")}`,
//     },
//     body: JSON.stringify({
//       name: "Test key",
//     }),
//   });

//   if (response.ok) {
//     return await response.json();
//   }
//   console.error(await response.json());
//   throw new Error("Could not register for an API key");
// }

// getAPIKey().then(console.log);

//the getAPIKey function can removes because we now have our key
