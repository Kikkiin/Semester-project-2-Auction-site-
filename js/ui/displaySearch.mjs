export function displaySearchResults(listings) {
  const container = document.getElementById("listing-container");
  container.innerHTML = "";

  if (!listings || listings.length === 0) {
    container.style.display = "none";
    return;
  }

  listings.forEach((listing) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("listing-item");

    const title = document.createElement("h2");
    title.textContent = listing.title;
    resultItem.appendChild(title);

    const description = document.createElement("p");
    description.textContent = listing.description;
    resultItem.appendChild(description);

    if (listing.media && listing.media.length > 0) {
      const image = document.createElement("img");
      image.src = listing.media[0].url;
      image.alt = listing.media[0].alt;
      image.classList.add("img-fluid", "w-25");
      resultItem.appendChild(image);
    }

    container.appendChild(resultItem);
  });

  container.style.display = "block";
}
