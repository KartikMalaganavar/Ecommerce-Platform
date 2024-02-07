// PaymentReducer.js

import {
    CREATE_PAYMENT_REQUEST,
    CREATE_PAYMENT_FAILURE,
    UPDATE_PAYMENT_REQUEST,
    UPDATE_PAYMENT_FAILURE,
  } from "./ActionType";
  
  const initialState = {
    creatingPayment: false,
    updatingPayment: false,
    error: null,
  };
  
  const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_PAYMENT_REQUEST:
        return {
          ...state,
          creatingPayment: true,
          error: null,
        };
  
      case CREATE_PAYMENT_FAILURE:
        return {
          ...state,
          creatingPayment: false,
          error: action.payload,
        };
  
      case UPDATE_PAYMENT_REQUEST:
        return {
          ...state,
          updatingPayment: true,
          error: null,
        };
  
      case UPDATE_PAYMENT_FAILURE:
        return {
          ...state,
          updatingPayment: false,
          error: action.payload,
        };
  
      // Add more cases if needed for success actions or other actions
  
      default:
        return state;
    }
  };
  
  export default paymentReducer;
  