import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://pixabay.com';

export default class OnApiFetch {
  constructor() {
    this.API_KAY = 'key=28245288-63872aeeb6359b149a47311c9';
    this.userSearch = '';
    this.numPages = 1;
    this.submit = false;
    this.onInfinitiScroll = false;
  }
  async onFetch() {
    const images = await axios
      .get(
        `/api/?${this.API_KAY}&q=${this.userSearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.numPages}&per_page=40`
      )
      .catch(e => console.log('ERROR'));
    this.numPages += 1;
    this.onInfinitiScroll = true;
    return images.data;
  }
  get search() {
    return this.search;
  }

  set search(newSearch) {
    this.userSearch = newSearch;
  }
  resetPage() {
    this.numPages = 1;
  }
  offInfinitiScroll() {
    this.onInfinitiScroll = false;
  }
}
