import { ImageGallery } from './ImageGallery.styled';
import { ImageGalleryItemComponent } from '../ImageGalleryItem/ImageGalleryItem';

// import PropTypes from 'prop-types';

export const ImageGalleryComponent = ({ items }) => {
  return (
    <ImageGallery>
      {items.map(item => (
        <ImageGalleryItemComponent
          key={item.id}
          imgUrl={item.webformatURL}
          imgLarge={item.largeImageURL}
          tags={item.tags}
        ></ImageGalleryItemComponent>
      ))}
    </ImageGallery>
  );
};

