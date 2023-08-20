import React, { Component } from 'react';

import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled.js';

import { AiOutlineSearch } from 'react-icons/ai';

import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

export class SearchBarComponent extends Component {
  state = {
    textForSearch: '',
  };

  // Записуємо в стейт значення інпута
  onChangeSearchBarComponent = event => {
    this.setState({ textForSearch: event.currentTarget.value.toLowerCase() });
  };

  // Передаємо в App значення нового value і очищуємо форму
  onSubmitSearchBarComponent = event => {
    event.preventDefault();

    const { textForSearch } = this.state;
    const { onSubmit } = this.props;

    if (textForSearch.trim() === '') {
      return toast.error('Please enter key words for search');
    }

    onSubmit(textForSearch);

    this.setState({
      textForSearch: '',
    });
  };

  render() {
    const { textForSearch } = this.state;
    return (
      <Searchbar className="searchbar">
        <SearchForm className="form" onSubmit={this.onSubmitSearchBarComponent}>
          <SearchFormButton type="submit" className="button">
            <AiOutlineSearch size="24" />
          </SearchFormButton>
          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeSearchBarComponent}
            value={textForSearch}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

SearchBarComponent.propType = {
  onSubmitApp: PropTypes.func.isRequired,
};
