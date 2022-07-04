import Notiflix from 'notiflix';
import 'simplelightbox/dist/simple-lightbox.min.css';
import PicturesApiService from './api-fetch';
import { addBackToTop } from 'vanilla-back-to-top';
import simpleLightbox from 'simplelightbox';
import creatCardImages from './api-img-card';

const imgFetch = new PicturesApiService();

const refs = {
  form: document.getElementById('search-form'),
  galleryList: document.querySelector('.gallery-list'),
  observer: document.getElementById('observer'),
  infoFinish: document.querySelector('.info-finish'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  imgFetch.offInfinitiScroll();
  hideInfoFinishPage();
  imgFetch.resetPage();
  imgFetch.search = e.currentTarget.elements.searchQuery.value;
  imgFetch.submit = true;
  resetGallery();

  fetchObjForCreatGallery();
}

function onHovManyGetImg(img) {
  if (img.hits.length === 0) {
    Notiflix.Notify.failure(
      `Sorry, there are no images matching your search query. Please try again.`
    );
  } else {
    Notiflix.Notify.success(`Hooray! We found ${img.totalHits} images.`);
  }
}

async function fetchObjForCreatGallery() {
  const images = await imgFetch.onFetch();

  if (images === 'error' && !imgFetch.submit) {
    showInfoFinishPage();
    return;
  } else if (images.hits.length === 0 && !imgFetch.submit) {
    showInfoFinishPage();
  } else if (imgFetch.submit) {
    onHovManyGetImg(images);
  }

  onCreateGallery(images);
}

function onCreateGallery(dataImg) {
  const images = creatCardImages(dataImg.hits);
  refs.galleryList.insertAdjacentHTML('beforeend', images);
  lightbox.refresh();
}

function resetGallery() {
  refs.galleryList.innerHTML = '';
}

const lightbox = new simpleLightbox('.gallery img', {
  sourceAttr: 'data-href',
  overlayOpacity: 0.5,
  captionsData: 'alt',
  captionDelay: 250,
});

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && imgFetch.onInfinitiScroll) {
      imgFetch.submit = false;
      fetchObjForCreatGallery();
    }
  });
};

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '150px',
});

observer.observe(refs.observer);

addBackToTop({
  diameter: 50,
  backgroundColor: '#7979795b',
  textColor: 'white',
});

function showInfoFinishPage() {
  refs.infoFinish.classList.remove('its-hidden');
}

function hideInfoFinishPage() {
  refs.infoFinish.classList.add('its-hidden');
}
