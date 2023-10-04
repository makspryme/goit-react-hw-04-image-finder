import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({images, largeImage }) {
  return (
    <div>
      <ul className="ImageGallery">
        {images.length > 0 &&
          images.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                id={id}
                image={webformatURL}
                largeImage={largeImageURL}
                onImageClick={largeImage}
              />
            );
          })}
      </ul>
    </div>
  );
}
