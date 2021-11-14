import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
   
    galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
function createGalleryMarkup(images) {
    return images.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img class="gallery__image"
         src="${preview}"
         alt="${description}"
    />
</a>`;
    })
        .join('');
}



    galleryContainer.addEventListener('click', onImageClick);
    
     function onImageClick(evt) {
         evt.preventDefault();
       

         const images = document.querySelectorAll(".gallery__image");
            images.forEach(function(image) {
            image.setAttribute("title", `${evt.target.getAttribute("alt")}`);
             })
       
    }

    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.options.captionDelay = 250;

