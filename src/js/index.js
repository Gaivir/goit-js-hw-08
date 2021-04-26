import images from "./gallery-items.js";


const imgsContainerEl = document.querySelector('.js-gallery');
const lightboxContainerEl = document.querySelector('.lightbox');
const modalImgEl = document.querySelector('.lightbox__image');
const origImgEl = document.querySelector('.gallery__image');
const btnCloseEl = document.querySelector('.lightbox__button');


const imgsMake = createImgsCards(images);
imgsContainerEl.insertAdjacentHTML('beforeend', imgsMake);


imgsContainerEl.addEventListener('click', onPaletteContainertClick);
btnCloseEl.addEventListener('click', btnCloseClick);

// Створюємо колекцію карток
function createImgsCards(images) {
    return images.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
 
    }).join(' ');
}


function onPaletteContainertClick(evt) {
  evt.preventDefault();
  const isImgSwatchEl = evt.target.classList.contains('gallery__image');
 
    if (!isImgSwatchEl) {
        return;
  }
  console.log(evt.target);
  
  lightboxContainerEl.classList.add("is-open");

  modalImgEl.src = evt.target.dataset.source;
 
  
}

// Кнопка
function btnCloseClick() {
  lightboxContainerEl.classList.remove("is-open");
  modalImgEl.src = ' ';
}




