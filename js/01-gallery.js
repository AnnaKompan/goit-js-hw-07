import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItem = createGalleryItems(galleryItems);

function createGalleryItems(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </div>`
    )
    .join("");
}

gallery.innerHTML = galleryItem;

gallery.addEventListener("click", bigImgURLGetter);
const bigImgUrl = bigImgURLGetter();

function bigImgURLGetter(evt) {
  evt.preventDefault();
  const bigImg = basicLightbox.create(`<img
  src=${evt.target.dataset.source} width="800" height="600">`);
  bigImg.show();
  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      bigImg.close();
    }
  });
}
