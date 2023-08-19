import React, { Component } from 'react';

import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  //   SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled.js';

import { AiOutlineSearch } from 'react-icons/ai';

import PropTypes from 'prop-types';

export class SearchBarComponent extends Component {
  state = {
    value: '',
  };

  onSubmitSearchBarComponent = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      return alert('Please enter key words for search');
    }

    this.props.onSubmitApp(this.state.value);
    this.setState({ value: '' });
  };

  //   onChangeSearchBarComponent = ({ target: { value } }) => {
  //     this.setState({ value: value.toLowerCase() });
  //   };

  onChangeSearchBarComponent = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  render() {
    const { value } = this.state;
    return (
      <Searchbar className="searchbar">
        <SearchForm className="form" onSubmit={this.onSubmitSearchBarComponent}>
          <SearchFormButton type="submit" className="button">
            <AiOutlineSearch size="24" />
          </SearchFormButton>
          <SearchFormInput
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.onChangeSearchBarComponent}
            // value={this.state.value}
            value={value}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

SearchBarComponent.propType = {
  onSubmitApp: PropTypes.func.isRequired,
};
