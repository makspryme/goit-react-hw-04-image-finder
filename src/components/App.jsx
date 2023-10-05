import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageApi from './services/ImageApi';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export default function App() {
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState('');
  const [largeImage, setLargeImage] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    function handleApiImages() {
      ImageApi(imageName, page)
        .then(r => {
          if (page === 1) {
            setImages(r.hits);
          } else {
            setImages(s => [...s, ...r.hits]);
          }
        })
        .catch(error => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    if (imageName !== '' && page === 1) {
      setImages([]);
      setLoading(true);

      handleApiImages();
    }
    if (page > 1) {
      handleApiImages();
    }
  }, [imageName, page]);

  function handleLoadMore() {
    setPage(s => s + 1);
  }

  function resetLargeImage() {
    setLargeImage('');
  }

  function handleSubmitForm(value) {
    setImageName(value);
    setPage(1);
  }

  return (
    <div>
      <Searchbar onSubmit={handleSubmitForm} />
      <ImageGallery
        searchName={imageName}
        onImageClick={setLargeImage}
        loading={loading}
        error={error}
        images={images}
        largeImage={setLargeImage}
      />
      {images.length > 0 && <Button onClick={handleLoadMore} />}
      {loading && <Loader />}
      {largeImage.length > 0 && (
        <Modal largeImage={largeImage} resetImage={resetLargeImage} />
      )}
    </div>
  );
}
