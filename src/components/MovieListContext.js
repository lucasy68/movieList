import { createContext, useState } from "react";
export const MovieListContext = createContext({
  movieList: [],
  setMovieList: () => {},
  search: "",
  setSearch: () => {},
});

export const MovieProvider = ({ children }) => {
  const [movieList, setMovieList] = useState(null);
  const [search, setSearch] = useState("");
  const value = { movieList, setMovieList, search, setSearch };
  return (
    <MovieListContext.Provider value={value}>
      {children}
    </MovieListContext.Provider>
  );
};
