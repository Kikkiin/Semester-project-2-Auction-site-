import { API_BASE_URL } from "./api.mjs";
// import { REGISTER_URL } from "./api.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  try {
    const registerURL = API_BASE_URL + action;

    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    });

    if (response.ok) {
      const result = await response.json();
      document.getElementById("error-message").classList.add("d-none");
      document.getElementById("success-message").classList.remove("d-none");
      document.getElementById("success-message").textContent =
        "Registration successful! You can now log in.";

      setTimeout(() => {
        window.location.href = "../../auth/login/index.html";
      }, 2000);

      return result;
    } else {
      throw new Error("Could not register the account. Please try again.");
    }
  } catch (error) {
    console.error(error);
    document.getElementById("success-message").classList.add("d-none");
    document.getElementById("error-message").classList.remove("d-none");
    document.getElementById("error-message").textContent = error.message;
  }
}
