import { login } from "../auth/login.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#login-form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      // console.log(profile);

      // send to the API
      await login(profile);
    });
  }
}
