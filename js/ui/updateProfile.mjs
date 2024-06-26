import { load } from "../storage/localStorage.mjs";
import { getProfile } from "../profile/read.mjs";
import { updateProfile } from "../profile/update.mjs";

export async function handleUpdateProfile() {
  const form = document.querySelector("#editProfile");

  if (form) {
    const { name, email } = load("profile");
    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    form.name.value = name;
    form.email.value = email;
    // form.banner.value = profile.banner;
    if (profile && profile.avatar && profile.avatar.url) {
      form.avatar.value = profile.avatar.url;
    }
    // form.avatar.value = profile.avatar.url;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submitForm = event.target;
      const formData = new FormData(submitForm);
      const profileData = Object.fromEntries(formData.entries());

      const updatedProfile = await updateProfile(profileData);
      if (updatedProfile) {
        if (updatedProfile.avatar && updatedProfile.avatar.url) {
          document.getElementById("avatarImage").src =
            updatedProfile.avatar.url || "../../images/defaultavatar.png";
        } else {
          document.getElementById("profileName").textContent =
            updatedProfile.name;
        }
        localStorage.setItem("profile", JSON.stringify(updatedProfile));

        alert(
          "Profile updated successfully! Redirecting to your profile page..."
        );
        window.location.href = "../../account/profile/index.html";
      } else {
        alert("Failed to update profile. Please try again.");
      }
    });
  }
  // updateProfile(profileData);
}
