export function previewListing(listing) {
  const listingContainer = document.createElement("div");
  listingContainer.classList.add(
    "listing-container",
    "col-md-4",
    "mb-3",
    "p-3",
    "border",
    "rounded"
  );

  const listingLink = document.createElement("a");
  listingLink.href = `../../listings/create/index.html?id=${listing.id}`;

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
  bidCount.classList.add("badge", "bg-primary");

  listingContainer.appendChild(imageContainer);
  listingContainer.appendChild(title);
  listingContainer.appendChild(description);
  listingContainer.appendChild(createdDate);
  listingContainer.appendChild(endDate);
  listingContainer.appendChild(bidCount);

  return listingContainer;
}