import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import './overlay.css';
import { RiSearch2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const SearchOverlay = ({ onClose }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const suggestions = [
    'Packages',
    'Bandipur',
    'Kenya',
    'Bandhavgarh',
    'Tanzania',
    'Corbett',
    'Kabini',
    'Ranthambore',
    'Blogs'
  ];

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSuggestionClick = (suggestion) => {
    navigate(`/${(suggestion.toLowerCase())}`);
    onClose();
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const exactMatch = suggestions.find(
        (suggestion) =>
          suggestion.toLowerCase() === searchValue.toLowerCase()
      );

      if (exactMatch) {
        handleSuggestionClick(exactMatch);
      } else if (filteredSuggestions.length > 0) {
        handleSuggestionClick(filteredSuggestions[0]);
      } else {
        navigate('/search-not-found');
      }
    }
  };

  return (
    <div className="search-overlay">
      <div className="overlay-content input-text">
        <div className='search'>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        </div>
        <div className="suggested-results mt-3">
          {filteredSuggestions.map((suggestion, index) => (
            <p key={index} onClick={() => handleSuggestionClick(suggestion)} style={{cursor:'pointer'}}>
              <RiSearch2Line className="search-icon" /> {suggestion}
            </p>
          ))}
        </div>
      </div>
      <p className="close-button" onClick={onClose}>
        <FiX size={40} color='white'/>
      </p>
    </div>
  );
};
export default SearchOverlay;
