import React, { Component } from 'react';
import './index.css';
import SuggestionItem from '../SuggestionItem';

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  };

  onChangeSearchInput = event => {
    this.setState({ searchInput: event.target.value });
  };

  updateSearchInput = suggestion => {
    this.setState({ searchInput: suggestion });
  };

  render() {
    const { searchInput } = this.state;
    const { suggestionsList } = this.props;
    const searchResults = suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-icon"
          />
          <input
            type="search"
            className="search-input"
            placeholder="Search Google"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
        </div>
        <ul className="suggestions-list">
          {searchResults.map(suggestion => (
            <SuggestionItem
              key={suggestion.id}
              suggestion={suggestion.suggestion}
              updateSearchInput={this.updateSearchInput}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default GoogleSuggestions;
