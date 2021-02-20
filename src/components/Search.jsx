import React, { useState } from 'react';
import { FiSearch, FiX, FiArrowRight } from 'react-icons/fi';
import { ReactComponent as SearchI } from '../assets/searchillus.svg';

function Search() {
  const initialResult = {
    projects: [],
    members: [],
    sprints: [],
  };
  const [searchtext, setSearchText] = useState('');
  const [searchresult, setSearchResult] = useState(initialResult);

  const handleChange = ({ currentTarget: input }) => {
    setSearchText(input.value);
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  return (
    <div className="search__container">
      <div className="search__heading">
        <h1>Search anything you want</h1>
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
      {searchtext ? (
        <div className="search__result">
          <p className="result__heading">Search Results</p>
          <div className="projects__result-section">
            <p className="section__heading">
              Projects
              {searchresult.projects.length > 2 && (
                <span>
                  view all <FiArrowRight />
                </span>
              )}
            </p>
            <h5>{searchtext}</h5>
          </div>
          <div className="members__result-section">
            <p className="section__heading">
              Members
              {searchresult.members.length > 2 && (
                <span>
                  view all <FiArrowRight />
                </span>
              )}
            </p>
            <h5>{searchtext}</h5>
          </div>
          <div className="sprints__result-section">
            <p className="section__heading">
              Sprints
              {searchresult.sprints.length > 2 && (
                <span>
                  view all <FiArrowRight />
                </span>
              )}
            </p>
            <h5>{searchtext}</h5>
          </div>
        </div>
      ) : (
        <div className="search__image">
          <p>Type something to see magic</p>
          <SearchI className="image" />
        </div>
      )}
    </div>
  );
}

export default Search;
