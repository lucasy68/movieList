import "./Input.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import { MovieListContext } from "../MovieListContext";
const Input = () => {
  const { search, setSearch } = useContext(MovieListContext);

  const searchHandler = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  return (
    <div className="container">
      <form>
        <input
          placeholder="Search"
          type="text"
          value={search}
          onChange={searchHandler}
        />

        <FontAwesomeIcon className="icon" icon={faSearch} />
      </form>
    </div>
  );
};
export default Input;
