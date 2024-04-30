import { setRegisterFormListener } from "./register/register.mjs";
import { setLoginFormListener } from "./login/login.mjs";
import { logout } from "./logout/logout.mjs";

setRegisterFormListener();

setLoginFormListener();

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
}

window.logout = logout;
