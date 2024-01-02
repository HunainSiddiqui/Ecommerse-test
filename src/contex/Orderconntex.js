// OrderContext.js
import React, { createContext, useReducer, useContext } from 'react';

const OrderContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};

const initialState = {
  orders: [],
};
const myorderstate = {
  myorder: []
}
const orderReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      // Add the order to the state
      return {
        ...state,
        orders: [ action.payload],
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

const myorderreduser = (state, action) => {
  switch (action.type) {
    case "MY_ORDER":
      return {
        ...state,
        myorder: [ action.payload],
      };
    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);
  const [myorder,setmyorder] = useReducer(myorderreduser,myorderstate) ;

  return (
    <OrderContext.Provider value={{ state, dispatch,myorder,setmyorder }}>
      {children}
    </OrderContext.Provider>
  );
};
