import * as basicLightbox from 'basiclightbox';
import { useEffect } from 'react';

export default function Modal({ resetImage, largeImage }) {
  const instance = basicLightbox.create(`
      <div class="Overlay">
        <div class="Modal">
          <img src=${largeImage} width="800" alt="" />
        </div>
      </div>
  `);

  function closeModal(e) {
    if (e.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeModal, true);
    }
    resetImage();
  }

  useEffect(() => {
    window.addEventListener('keydown', closeModal, true);
  }, []);

  return <>{instance.show()}</>;
}
