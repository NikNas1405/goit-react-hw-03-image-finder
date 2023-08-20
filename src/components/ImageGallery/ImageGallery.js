import { Component } from 'react';
import { ImageGallery } from './ImageGallery.styled';
import { ImageGalleryItemComponent } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';

import { ButtonLoadMore } from '../Button/Button';

// import { toast } from 'react-toastify';

import { getAsked } from '../../utils/get-api';

// import PropTypes from 'prop-types';

export class ImageGalleryComponent extends Component {
  state = {
    searchRequest: null,
    error: null,
    status: 'idle',

    images: [],

    page: 1,
    perPage: 12,
    totalPages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, error } = this.state;
    const newValue = this.props.value;
    const prevValue = prevProps.value;

    if (prevValue !== newValue || prevState.page !== page) {
      this.setState({ status: 'pending' });
      if (error) {
        this.setState({ error: null });
      }

      getAsked(newValue, page)
        .then(images => {
          this.setState(prevState => ({
            images:
              page === 1 ? images.hits : [...prevState.images, ...images.hits],
            status: 'resolved',
            totalPages: Math.floor(images.totalHits / 12),
          }));
        })
        .catch(error => {
          return this.setState({
            error,
            status: 'rejected',
          });
          //   toast.info(
          //     'Sorry. There are no images matching your search query. Please try again.'
        });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { error, status, images, page, totalPages } = this.state;

    if (status === 'idle') {
      return <div>Введіть пошуковий запит</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <div>{error.message}</div>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery>
            {images.map(item => (
              <ImageGalleryItemComponent
                key={item.id}
                item={item}
                //   getItemClick={getItemClick}
              ></ImageGalleryItemComponent>
            ))}

            {/* {images.length > 0 &&
              status !== 'pending' &&
              page <= totalPages && (
                <ButtonLoadMore onClickButtonLoadMore={this.handleLoadMore} />
              )} */}
          </ImageGallery>
          {images.length > 0 && status !== 'pending' && page <= totalPages && (
            <ButtonLoadMore onClickButtonLoadMore={this.handleLoadMore} />
          )}
        </>
      );
    }
  }
}
