import * as basicLightbox from 'basiclightbox';

export default function Modal({ resetImage, largeImage }) {
  const instance = basicLightbox.create(`
      <div class="Overlay">
        <div class="Modal">
          <img src=${largeImage} width="800" alt="" />
        </div>
      </div>
  `);

  const closeModal = e => {
    if (e.code === 'Escape') {
      instance.close();
    }
    window.removeEventListener('keydown', closeModal, true);
    resetImage();
  };

  window.addEventListener('keydown', closeModal, true);

  return <>{instance.show()}</>;
}
