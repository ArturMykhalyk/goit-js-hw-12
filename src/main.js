import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';

// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const inputSearch = document.querySelector('[name="search-text"]');
const btnMore = document.querySelector('.moreButton');
let searchWord = '';
let page = 1;
let per_Page = 15;
let totalPages = 0;

form.addEventListener('submit', async event => {
  event.preventDefault();
  hideLoadMoreButton();
  searchWord = inputSearch.value.trim();

  if (!searchWord) {
    form.reset();
    return iziToast.error({
      message: `The input string must not be empty.`,
      position: 'topRight',
    });
  }

  showLoader();
  clearGallery();

  page = 1;
  per_Page = document.querySelector('.page_per_selest').value;

  try {
    const images = await getImagesByQuery(searchWord, page, per_Page);
    hideLoader();

    if (images.hits.length === 0) {
      return iziToast.info({
        message: `There are no results for your query.`,
        position: 'topRight',
      });
    }

    createGallery(images.hits);
    totalPages = images.totalHits / per_Page;
    if (totalPages > 1) {
      page++;
      showLoadMoreButton();
    } else {
      return iziToast.success({
        message: `This is all that was found by query.`,
        position: 'topRight',
      });
    }
  } catch (error) {
    hideLoader();
    console.error('Error fetching images:', error);
  }

  form.reset();
});

btnMore.addEventListener('click', async () => {
  showLoader();
  try {
    const images = await getImagesByQuery(searchWord, page, per_Page);
    hideLoader();
    createGallery(images.hits);
    scrollPage();
  } catch (error) {
    console.error('Error click button images:', error);
  }

  if (totalPages <= page) {
    hideLoadMoreButton();

    iziToast.info({
      message: "We're sorry, but you've reached the end of search results",
      position: 'topRight',
    });
  }
  page++;
});

function scrollPage() {
  const rect = document.querySelector('.gallery-link').getBoundingClientRect();
  window.scrollBy({
    top: rect.height * 2 + 48,
    behavior: 'smooth',
  });
}
