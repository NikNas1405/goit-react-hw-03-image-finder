import { Component } from 'react';

import { Modal } from '../Modal/Modal';

import {
  ImageGalleryItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

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
