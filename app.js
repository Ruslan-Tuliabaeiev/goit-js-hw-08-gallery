

const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];



//   Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.


const gallery = document.querySelector('.gallery');

const arrayMasiv = galleryFoto(galleryItems);

gallery.insertAdjacentHTML('beforeend', arrayMasiv);

function galleryFoto(items) {
return items.map(({preview, original, description }) => {
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
  </li>
  
  `;
}).join('');
}


//   Открытие модального окна по клику на элементе галереи.


 
  
 
  const modal = document.querySelector('.lightbox__content');
  const lightboxImage = document.querySelector('.lightbox__image');
const lightbox = document.querySelector('.lightbox');
 const button = document.querySelector('[data-action="close-lightbox"]');


 const image = document.createElement('img');

image.classList.add('gallery__image');

gallery.addEventListener('click', onGalleryClick);
button.addEventListener('click', onClickHandlerClose);
modal.addEventListener('click', closeLightbox);




function onGalleryClick(e) {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') {
    return
  }
  if (e.target.nodeName === 'IMG') {
   lightbox.classList.add('is-open')
   lightboxImage.src = e.target.getAttribute('data-source')
    lightboxImage.alt = e.target.alt
  }
  window.addEventListener('keyup', clickKey)
};


function onClickHandlerClose(e) {

 lightbox.classList.remove('is-open')
  lightboxImage.src = ''
 lightboxImage.alt = ''
  window.removeEventListener('keyup', clickKey)
};



function closeLightbox(event) {
  if (event.target === event.currentTarget) {
    onClickHandlerClose()
  }
};

function clickKey(event) {
  if (event.code === 'Escape' || event.code === 'Esc') {
    onClickHandlerClose()
  }
};



modal.addEventListener( 'click',  (e) => {
  const condition = e.target.classList.contains('backDrop')
  if (condition) { modal.classList.add('isHidden')}
})


// window.addEventListener('keydown', (e) =>{
//   const condition = e.code === 'Escape' || e.code === 'ArrowLeft' || e.code === 'ArrowRight'
//  console.log(e.code === 'Escape')
//  if (condition) { modal.classList.add('isHidden')}
// });





// function showElement(element) {
//   element.classList.remove('isHidden')
// }

// function hideElement(element) {
//   element.classList.add('isHidden')
// }
 


