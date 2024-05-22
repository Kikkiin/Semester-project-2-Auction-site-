export function previewListing(listing) {
  const listingContainer = document.createElement("div");
  listingContainer.classList.add(
    "listing-container",

    "mb-4",
    "p-3",
    "border",
    "rounded"
  );

  const listingLink = document.createElement("a");
  listingLink.href = `../../listings/detailedListing/index.html?id=${listing.id}`;
  listingLink.className = "text-decoration-none text-dark";

  // Bildegalleri for listinget (antar at det kan være flere bilder)
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container", "mb-3");
  listing.media.forEach((media) => {
    const img = document.createElement("img");
    img.src = media.url;
    img.alt = media.alt || "Listing Image";
    img.classList.add("img-fluid", "mb-2");
    imageContainer.appendChild(img);
  });

  if (listing.media && listing.media.length > 0) {
    listing.media.forEach((media) => {
      const img = document.createElement("img");
      img.src = media.url;
      img.alt = media.alt || "Listing Image";
      img.classList.add("img-fluid", "mb-2", "w-100"); // Bruker Bootstrap-klasser for å justere størrelsen
      imageContainer.appendChild(img);
    });
  } else {
    const img = document.createElement("img");
    img.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-_0eTvt-oVkIWlTPKpyVV5Bz2nR8YfZ19Q&s";
    img.alt = "Default Listing Image";
    img.classList.add("img-fluid", "mb-2", "w-100"); // Bruker Bootstrap-klasser for å justere størrelsen
    imageContainer.appendChild(img);
  }

  const title = document.createElement("h5");
  title.textContent = listing.title;
  title.classList.add("mt-2", "fw-bold");

  const description = document.createElement("p");
  description.textContent = listing.description;
  description.classList.add("text-muted");

  const createdDate = document.createElement("p");
  createdDate.textContent = `Listed on: ${new Date(listing.created).toLocaleDateString()}`;
  createdDate.classList.add("text-small");

  const endDate = document.createElement("p");
  endDate.textContent = `Ends on: ${new Date(listing.endsAt).toLocaleDateString()}`;
  endDate.classList.add("text-small", "text-danger");

  const bidCount = document.createElement("p");
  bidCount.textContent = `Bids: ${listing._count.bids}`;
  bidCount.classList.add("badge", "bg-custom");

  listingContainer.appendChild(imageContainer);
  listingContainer.appendChild(title);
  listingContainer.appendChild(description);
  listingContainer.appendChild(createdDate);
  listingContainer.appendChild(endDate);
  listingContainer.appendChild(bidCount);

  listingLink.appendChild(listingContainer);

  return listingLink;
}
