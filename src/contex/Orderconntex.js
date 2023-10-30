// OrderContext.js
import React, { createContext, useReducer, useContext } from 'react';

const OrderContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};

const initialState = {
  orders: [],
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      // Add the order to the state
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case 'REMOVE_ORDER':
      // Remove an order from the state
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload),
      };
    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
