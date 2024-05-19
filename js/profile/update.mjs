import { API_BASE_URL } from "../auth/api.mjs";
import { API_PROFILE_URL } from "../auth/api.mjs";
import { customFetch } from "../fetch/fetch.mjs";

export async function updateProfile(profileData) {
  console.log("Received profile data:", profileData);
  const updateProfileURL = `${API_BASE_URL}${API_PROFILE_URL}/${profileData.name}`;

  try {
    const response = await customFetch(updateProfileURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bio: profileData.bio,
        avatar: {
          url: profileData.avatar,
          alt: profileData.avatar,
        },
        // banner: {
        //   url: profileData.banner.url,
        //   alt: profileData.banner.alt,
        // },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update profile");
    }

    const updatedProfile = await response.json();
    return updatedProfile;
  } catch (error) {
    console.error("Error updating profile:", error);
  }

  // const updatedProfile = await response.json();
  // //   console.log(listing);

  // return updatedProfile;
}
