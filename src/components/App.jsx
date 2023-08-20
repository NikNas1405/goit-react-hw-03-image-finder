import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from './GlobalStyle';

import { SearchBarComponent } from './Searchbar/Searchbar';
import { ImageGalleryComponent } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    textForSearch: '',
  };

  handleSearchSubmit = textForSearch => {
    this.setState({
      textForSearch,
    });
  };

  render() {
    const { textForSearch } = this.state;
    return (
      <div>
        <SearchBarComponent onSubmitApp={this.handleSearchSubmit} />
        <ImageGalleryComponent value={textForSearch} />
        <ToastContainer autoClose={2000} />
        <GlobalStyle />
      </div>
    );
  }
}
