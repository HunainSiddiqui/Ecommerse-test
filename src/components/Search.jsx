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
      <div className="input-group" style={{padding:"10px"}}>
        <input
          id="search"
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          style={{
            backgroundColor: "transparent",
            width: "200px",  // Increase the width to your desired value
            color: "white",  // Set the text color to white
          }}
   
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <label className="visually-hidden" htmlFor="search"></label>
        <button
          className="btn btn"
          type="submit"
          aria-label="Search"
          style={{"border":"1px"}}
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
