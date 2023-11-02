import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconSearch } from "bootstrap-icons/icons/search.svg";
import { useSearch } from '../contex/SearchContex';

const Search = () => {
  const [inputText, setInputText] = useState("");
  const { searchState, setSearchText } = useSearch();

  const handleSearch = () => {
    // Check if there's text to save

    if (inputText) {
      // Save the search text in local storage
      setSearchText(inputText);
     
    }
    else
    {
      setSearchText("") ;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    // Redirect to the category page or perform other search-related actions
  };

  return (
    <form action="#" className="search" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          id="search"
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
   
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <label className="visually-hidden" htmlFor="search"></label>
        <button
          className="btn btn-primary text-white"
          type="submit"
          aria-label="Search"
          onClick={handleSearch}
        >
          <Link to="/category">
             <IconSearch style={{ fill: 'white' }}/>
          </Link>
        </button>
      </div>
    </form>
  );
};

export default Search;
