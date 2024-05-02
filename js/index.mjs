import { setRegisterFormListener } from "./register/register.mjs";
import { setLoginFormListener } from "./login/login.mjs";
import { logout } from "./logout/logout.mjs";
import { createListings } from "./listings/create.mjs";
import { updateListings } from "./listings/update.mjs";
import { removeListings } from "./listings/delete.mjs";
import { getListing, getListings } from "./listings/read.mjs";

setRegisterFormListener();

setLoginFormListener();

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
}

window.logout = logout;

function getValidEndsAtDate() {
  const today = new Date();
  const sixMonthsFromNow = new Date(
    today.getFullYear(),
    today.getMonth() + 6,
    today.getDate()
  );
  return sixMonthsFromNow.toISOString(); // Konverter til ISO 8601 format
}

createListings({
  title: "Example",
  endsAt: getValidEndsAtDate(),
});

updateListings({
  id: "e482b2a3-10d1-4947-9688-15c04f0ae623",
  title: "Example",
});

removeListings("e482b2a3-10d1-4947-9688-15c04f0ae623");

getListings().then(console.log);

getListing("4df8e20f-1160-4746-9ba1-67ab27dfd6c0").then(console.log);
