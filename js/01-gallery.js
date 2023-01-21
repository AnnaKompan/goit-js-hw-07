import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
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

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.

// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

gallery.addEventListener("click", bigImgURLGetter);
const bigImgUrl = bigImgURLGetter;

// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

function bigImgURLGetter(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const bigImg = basicLightbox.create(`<img
  src=${evt.target.dataset.source} width="800" height="600">`);
  bigImg.show();
}
// 6.Додай закриття модального вікна після натискання клавіші Escape.
// Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.
// Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

onShow: (bigImg) => {
  document.onkeydown = function (esc) {
    if (esc.code === "Escape") {
      bigImg.close();
      console.log(esc.code);
    }
  };
};
