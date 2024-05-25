import { register } from "../auth/register.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registration-form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      // console.log(profile);

      // send to the API
      await register(profile);
    });
  }
}
