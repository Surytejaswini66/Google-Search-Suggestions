// Write your code here
import React from 'react';
import './index.css';

const SuggestionItem = props => {
  const { suggestion, updateSearchInput } = props;

  const onClickSuggestion = () => {
    updateSearchInput(suggestion);
  };

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onClickSuggestion}
      />
    </li>
  );
};

export default SuggestionItem;
