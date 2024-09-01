import { createContext, useContext, useReducer } from "react";

export const refContext = createContext();

const refReducer = (state, action) => {
  switch (action.type) {
    case "ADD_REF":
      return action.payload;

    case "REV_DATA":
      return null;

    default:
      return state;
  }
};

export const useRefValue = () => {
  const value = useContext(refContext);
  return value[0];
};

export const useRefDispatch = () => {
  const value = useContext(refContext);
  return value[1];
};

const RefContextProvider = ({ children }) => {
  const [refValue, refDispatch] = useReducer(refReducer);

  return (
    <refContext.Provider value={[refValue, refDispatch]}>
      {children}
    </refContext.Provider>
  );
};

export default RefContextProvider;
