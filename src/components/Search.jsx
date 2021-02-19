import React, { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

function Search() {
  const [searchtext, setSearchText] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    setSearchText(input.value);
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  return (
    <div className="search__container" style={{ height: '100%' }}>
      <div className="search__heading">
        <h1>
          Search{' '}
          <span role="img" aria-label="search">
            🕵️‍♂️
          </span>
        </h1>
      </div>
      <div className="search__subheading">
        <p>Search Anything you want.</p>
      </div>
      <div className="search__bar">
        <div className="search__input">
          <FiSearch className="image" />
          <input
            type="text"
            placeholder="Search..."
            name="search"
            value={searchtext}
            onChange={handleChange}
          />
          {searchtext && <FiX className="image" onClick={handleClearSearch} />}
        </div>
      </div>
      <div className="search__result">
        <div className="projects__result-section">
          <h4>Projects</h4>
          <h5>{searchtext}</h5>
        </div>
        <div className="members__result-section">
          <h4>Members</h4>
          <h5>{searchtext}</h5>
        </div>
        <div className="sprints__result-section">
          <h4>Sprints</h4>
          <h5>{searchtext}</h5>
        </div>
      </div>
    </div>
  );
}

export default Search;
