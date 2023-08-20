import React, { Component } from 'react';

import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  //   SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled.js';

import { AiOutlineSearch } from 'react-icons/ai';

import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

export class SearchBarComponent extends Component {
  state = {
    value: '',
  };

  // Записуємо в стейт значення інпута
  onChangeSearchBarComponent = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  //   onChangeSearchBarComponent = ({ target: { value } }) => {
  //     this.setState({ value: value.toLowerCase() });
  //   };

  // Передаємо в App значення нового value і очищуємо форму
  onSubmitSearchBarComponent = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      return toast.error('Please enter key words for search');
    }

    this.props.onSubmitApp(this.state.value);
    this.setState({ value: '' });
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
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeSearchBarComponent}
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
