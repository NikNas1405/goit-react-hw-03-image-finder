import React, { Component } from 'react';
import { SearchBarComponent } from './Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  // state = { textForSearch: '' };

  handleSearchSubmit(textForSearch) {
    // this.setState({ textForSearch });
    console.log(textForSearch);
  }

  render() {
    // const { textSearch } = this.state;
    return (
      <div>
        <SearchBarComponent onSubmitApp={this.handleSearchSubmit} />
        <GlobalStyle />
      </div>
    );
  }
}
