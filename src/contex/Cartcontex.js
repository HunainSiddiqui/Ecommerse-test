// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Initial state for the cart
const initialState = {
  items: [],
};

// Create the context
const CartContext = createContext();

// Reducer to manage cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, items: [...state.items, action.payload] };
   
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};
const totalpriceReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      return action.payload; // Set the total price to the payload value
    default:
      return state;
  }
};

// CartContext provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [totalprice, settotalprice] = useReducer(totalpriceReducer, 0); 


  return (
    <CartContext.Provider value={{ state, dispatch ,totalprice,settotalprice}}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to access the CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
