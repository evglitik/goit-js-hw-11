import icons from './icon-bootstrap';

function creatCardImages(arrayImg) {
  const images = arrayImg
    .map(img => {
      return `<li><div class="img-container"><img src="${img.webformatURL}" data-href="${img.largeImageURL}" alt="${img.tags}" loading="lazy" /></div>
  <div class="info">
    <p class="info-item">
      <span>${icons.likes}</span><span>${img.likes}</span>
    </p>
    <p class="info-item">
      <span>${icons.views}</span><span>${img.views}</span>
    </p>
    <p class="info-item">
      <span>${icons.comments}</span><span>${img.comments}</span>
    </p>
    <p class="info-item">
      <span>${icons.downloads}</span><span>${img.downloads}</span>
    </p>
  </div>
</div></li>`;
    })
    .join('');

  return images;
}

export default creatCardImages;
