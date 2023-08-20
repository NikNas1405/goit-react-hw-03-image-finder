import { Component } from 'react';

import { Modal } from '../Modal/Modal';

import {
  ImageGalleryItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

// import PropTypes from 'prop-types';

export class ImageGalleryItemComponent extends Component {
  state = {
    showModal: false,
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { imgUrl, imgLarge, tags } = this.props;
    const { showModal } = this.state;

    return (
      <ImageGalleryItem className="gallery-item">
        <ImageGalleryItemImage
          onClick={this.toogleModal}
          src={imgUrl}
          alt={tags}
          width="240"
          loading="lazy"
        />
        {showModal && (
          <Modal
            largeUrl={imgLarge}
            tags={tags}
            showModal={this.state.showModal}
            onClick={this.toogleModal}
          />
        )}
      </ImageGalleryItem>
    );
  }
}

// export const ImageGalleryItemComponent = ({
//   item,
//   // onImageClick
// }) => {
//   return (
//     <ImageGalleryItem
//       className="gallery-item"
//       // onClick={event => {
//       //   event.preventDefault();
//       //   onImageClick({ largeImageURL, tags });
//       // }}
//     >
//       <ImageGalleryItemImage
//         src={item.webformatURL}
//         alt={item.tags}
//         loading="lazy"
//       />
//       <Modal />
//     </ImageGalleryItem>
//   );
// };

// ImageGalleryItem.propTypes = {
//   item: PropTypes.shape({
//     tags: PropTypes.string.isRequired,
//     webformatURL: PropTypes.string.isRequired,
//     // largeImageURL: PropTypes.string.isRequired,
//   }).isRequired,
//   onImageClick: PropTypes.func.isRequired,
// };
