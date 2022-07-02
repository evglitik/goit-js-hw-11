import icons from './icon-bootstrap';

function creatCardImages(arrayImg) {
    const images = arrayImg
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `<li><div class="img-container"><img src="${webformatURL}" data-href="${largeImageURL}" alt="${tags}" loading="lazy" /></div>
  <div class="info">
    <p class="info-item">
      <span>${icons.likes}</span><span>${likes}</span>
    </p>
    <p class="info-item">
      <span>${icons.views}</span><span>${views}</span>
    </p>
    <p class="info-item">
      <span>${icons.comments}</span><span>${comments}</span>
    </p>
    <p class="info-item">
      <span>${icons.downloads}</span><span>${downloads}</span>
    </p>
  </div>
</div></li>`;
        }
      )
      .join('');

  return images;
}

export default creatCardImages;
