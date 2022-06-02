import React, { useState } from "react";
import fetchSrv from "../services/fetchService";

const PokeDB = React.createContext({
  isLoading: true,
  hasError: false,
  pokeList: {},
});

export const PokeProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [pokeList, setPokeList] = useState({});
  let hasError = false;

  if (isLoading) {
    fetchSrv("https://pokeapi.co/api/v2/pokemon/?limit=151").then((data) => {
      if (data) {
        setPokeList(data);
        setLoading(false);
      }
    });
  }

  return <PokeDB.Provider value={{ isLoading: isLoading, hasError: hasError, pokeList: pokeList }}>{children}</PokeDB.Provider>;
};

export default PokeDB;
