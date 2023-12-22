import axios from 'axios';
import React from 'react';

export const Context = React.createContext();

export const GlobalContext = ({ children }) => {
  const [list, setList] = React.useState(null);

  React.useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => setList(response.data.results));
  }, []);

  return <Context.Provider value={{ list }}>{children}</Context.Provider>;
};
