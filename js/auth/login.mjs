import { API_BASE_URL } from "./api.mjs";
import * as storage from "../storage/localStorage.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  try {
    const loginURL = API_BASE_URL + action;

    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    });

    if (response.ok) {
      const { accessToken, ...user } = (await response.json()).data;
      //   console.log(result);
      storage.save("token", accessToken);
      storage.save("profile", user);
      document.getElementById("error-message").classList.add("d-none");

      window.location.href = "/";

      return user;
    } else {
      throw new Error("Login failed. Please check your credentials.");
    }
  } catch (error) {
    console.error(error);
    document.getElementById("error-message").classList.remove("d-none");
    document.getElementById("error-message").textContent = error.message;
  }
}
