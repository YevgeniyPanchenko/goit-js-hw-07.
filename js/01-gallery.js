import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
   let instance; 
    galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
function createGalleryMarkup(images) {
    return images.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
        
    })
        .join('');
}
    galleryContainer.addEventListener('click', onImageClick);
    
    function onImageClick(evt) {
        evt.preventDefault();
        openModal(evt);
        closeModal();
    }

    function openModal(evt) {
        instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}">
  `);

        instance.show();
    }

    function closeModal() {
        document.addEventListener("keydown", (e) => {
            if (e.code !== "Escape") {
                return;
            }
            instance.close();
        });
    }




