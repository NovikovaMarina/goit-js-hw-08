// Add imports above this line
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
import "./../css/01-gallery.css";
// Change code below this line

const galleryEL = document.querySelector(".gallery");

const createItem = galleryItems.map(({preview, original, description}) => {
    const galleryList = `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
    return galleryList;
})

galleryEL.insertAdjacentHTML('beforeend', createItem.join(''))


const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionsDelay: 250,
    disableScroll: false,
});


console.log(galleryItems);
