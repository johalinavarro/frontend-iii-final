import { createContext, useContext, useReducer, useEffect } from "react";

const webStorage = localStorage.getItem('webStorage')
const stateStorage = webStorage ? JSON.parse(localStorage.getItem('webStorage')) : { theme: "light", data: [] }

export const initialState = stateStorage

export const ContextGlobal = createContext();

const globalReducer = (state, action) => {

  const newData = [ ...state.data ]

  switch (action.type) {
    case "ADD_FAVORITES":
      const dentist = state.data.find(d => d.id === action.payload.id)
      if(!dentist) newData.push(action.payload)
      return { ...state, data: newData };
    case "REMOVE_FAVORITES":
      return { ...state, data: [ ...state.data.filter(d => d.id !== action.payload)] };
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const data = { state, dispatch };

  useEffect(() => {
    localStorage.setItem('webStorage', JSON.stringify(state))
  }, [state])

  return (
    <ContextGlobal.Provider value={data}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useGlobalStates = () => useContext(ContextGlobal);