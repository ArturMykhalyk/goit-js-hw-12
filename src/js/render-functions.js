import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//  Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї,
// додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  showCounter: false,
});
function createGallery(images) {
  const gallery = document.querySelector('.gallery');

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
  <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
    <ul class="gallery-info-img">
    <li><p class ="gallery-info-name">Likes <span>${likes}</span></p></li>
    <li><p class ="gallery-info-name">Views <span>${views}</span></p></li>
    <li><p class ="gallery-info-name">Comments <span>${comments}</span></p></li>
    <li><p class ="gallery-info-name">Downloads <span>${downloads}</span></p></li>

    </ul>
  </a>
</li>
`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

// Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає
function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

//  Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
function showLoader() {
  document.querySelector('.loader').classList.add('visible');
}

//  Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає
function hideLoader() {
  document.querySelector('.loader').classList.remove('visible');
}
function showLoadMoreButton() {
  document.querySelector('.moreButton').classList.add('visible');
}
function hideLoadMoreButton() {
  document.querySelector('.moreButton').classList.remove('visible');
}

export {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
};
