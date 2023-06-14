/*import { createContext, useState } from "react";

export const OrderContext = createContext(null);



 export function OrderContextProvider(props) {
  const [order, setOrder] = useState({
    topic: "",
    paperFormat:"",
    deadline: "",
    pages: 0,
    academicLvl: "",
    price: 0,
});

  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {props.children}
    </OrderContext.Provider>
  );
};
*/

import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  order:  null,
  loading: false,
  error: null,
};

export const OrderContext = createContext(INITIAL_STATE);

const OrderReducer = (state, action) => {
  switch (action.type) {
    case "START ORDER":
      return {
        order: null,
        loading:true,
        error:null,
      }
    case "ORDER_SUCCESS":
      return {
        order: action.payload,
        loading: false,
        error: null,
      }
    case "ORDER_FAILURE":
      return {
        order: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const OrderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OrderReducer, INITIAL_STATE);

 

  return (
    <OrderContext.Provider
      value={{
        order: state.order,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

