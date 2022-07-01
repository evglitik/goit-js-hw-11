import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.getElementById('search-form'),
  galleryList: document.querySelector('.gallery-list'),
  sentinel: document.getElementById('observer'),
};

console.log('hello');
