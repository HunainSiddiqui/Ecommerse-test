// searchContext.js

import React, { createContext, useContext, useReducer, useState } from 'react';

// Define the initial state for the search context.
const initialState = {
  searchText: '',
  searchResults: [],
};

// Create a context for the search state.
const SearchContext = createContext();

// Define the search actions.
const ACTIONS = {
  SET_SEARCH_TEXT: 'SET_SEARCH_TEXT',
  SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
};

// Reducer function to handle state updates based on actions.
function searchReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case ACTIONS.SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
  
}

// Search provider component that wraps your application.
function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  // A function to update the search text.
  const setSearchText = (text) => {
    dispatch({ type: ACTIONS.SET_SEARCH_TEXT, payload: text });
  };

  // A function to update the search results.
  

  return (
    <SearchContext.Provider
      value={{
        searchState: state,
        setSearchText,
     
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook to access the search context.
function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}

export { SearchProvider, useSearch };
