import * as storage from "../storage/localStorage.mjs";

export function logout() {
  storage.remove("token");
  storage.remove("profile");

  window.location.href = "../../auth/login/index.html";
}
