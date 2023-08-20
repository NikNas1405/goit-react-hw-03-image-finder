import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from './GlobalStyle';

import { SearchBarComponent } from './Searchbar/Searchbar';
import { ImageGalleryComponent } from './ImageGallery/ImageGallery';

import { Loader } from '../components/Loader/Loader';
import { ButtonLoadMore } from '../components/Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import { getAsked } from '../utils/get-api';

export class App extends Component {
  state = {
    images: [],
    textForSearch: '',
    page: 1,
    error: null,
    isLoading: false,
    totalPages: 0,
  };

  handleSearchSubmit = textForSearch => {
    this.setState({
      textForSearch,
      images: [],
      page: 1,
    });
  };

  // Якщо оновився стейт рендеримо картинки
  componentDidUpdate(prevProps, prevState) {
    if (prevState.textForSearch !== this.state.textForSearch) {
      this.getAskedImages();
    }
  }

  getAskedImages = async () => {
    const { textForSearch, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const images = await getAsked(textForSearch, page);

      if (images.hits.length === 0) {
        this.setState({
          isLoading: false,
        });
        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        totalPages: Math.floor(images.totalHits / 12),
      }));

      // this.setState(({ images, page }) => ({
      //   images: [...images, ...hits],
      //   // page: page + 1,
      // }));
    } catch (error) {
      this.setState({
        error: `Спробуйте перезавантажити сторінку та повторити запит`,
      });
      return toast.error(
        `Спробуйте перезавантажити сторінку та повторити запит`
      );
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.setState({ loading: true });
  };

  render() {
    const { images, isLoading, error, totalPages, page } = this.state;

    return (
      <div>
        <SearchBarComponent onSubmit={this.handleSearchSubmit} />
        {error}
        <ImageGalleryComponent items={images} />
        {isLoading && <Loader />}
        {images.length !== 0 && page <= totalPages && (
          <ButtonLoadMore onClickButtonLoadMore={this.handleLoadMore} />
        )}

        <ToastContainer autoClose={2000} />
        <GlobalStyle />
      </div>
    );
  }
}
