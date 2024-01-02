// CartContext.js
import React, { createContext, useReducer, useContext, useEffect } from "react";

// Initial state for the cart

const getcartdata = () => {
  let newdata = localStorage.getItem("Cart");

  if (!newdata || newdata === "[]") {
    return [];
  }

  return JSON.parse(newdata);
}
const initialState = {
  items: getcartdata(),
};

// Create the context
const CartContext = createContext();

// Reducer to manage cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the product with the same ID already exists in the cart
      const isProductInCart = state.items.some(
        (item) => item._id === action.payload._id
      );

      if (!isProductInCart) {
        // Product doesn't exist in the cart, so add it
        return { ...state, items: [...state.items, action.payload] };
      } else {
        // Product already exists, do not add it again (you can handle this case as needed)
        return state;
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "UPDATE_QUANTITY":
      // Find the product in the items array by matching the product's ID
      const updatedItems = state.items.map((item) => {
        if (item._id === action.payload.productId) {
          // Update the quantity for the matching product
          return { ...item, quantity: action.payload.newQuantity };
        }
        return item;
      });
      return { ...state, items: updatedItems };
    default:
      return state;
  }
};
const totalpriceReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOTAL_PRICE":
      return action.payload;
    default:
      return state;
  }
};



// CartContext provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [totalprice, settotalprice] = useReducer(totalpriceReducer, 0);


  useEffect(()=>{
    localStorage.setItem("Cart",JSON.stringify(state.items))
  
  },[state.items]) 

  return (
    <CartContext.Provider
      value={{ state, dispatch, totalprice, settotalprice }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to access the CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
