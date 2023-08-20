import {
  ImageGalleryItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

// import PropTypes from 'prop-types';

export const ImageGalleryItemComponent = ({
  item,
  // onImageClick
}) => {
  return (
    <ImageGalleryItem
      className="gallery-item"
      // onClick={event => {
      //   event.preventDefault();
      //   onImageClick({ largeImageURL, tags });
      // }}
    >
      <ImageGalleryItemImage
        src={item.webformatURL}
        alt={item.tags}
        loading="lazy"
      />
    </ImageGalleryItem>
  );
};

// ImageGalleryItem.propTypes = {
//   item: PropTypes.shape({
//     tags: PropTypes.string.isRequired,
//     webformatURL: PropTypes.string.isRequired,
//     // largeImageURL: PropTypes.string.isRequired,
//   }).isRequired,
//   onImageClick: PropTypes.func.isRequired,
// };
