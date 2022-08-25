import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./HomePage.css";

const HomePage = (props) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [formValid, seFormValid] = useState(false);

  useEffect(() => {
    if (search.length > 0) seFormValid(true);
    else seFormValid(false);
  }, [search]);

  const changeSearch = (event) => {
    setSearch(event.target.value);
  };

  const searchNews = (event) => {
    event.preventDefault();
    navigate(`/newslist/${search}`);
  };

  return (
    <div className="searcher">
      <h2>NEWS LISTER</h2>
      <form className="searchContainer" onSubmit={searchNews}>
        <label>Enter search text: </label>
        <div className="searchInput">
          <input className="inputBox" value={search} type="text" onChange={changeSearch}></input>
          {!formValid && <p className="error"> You must enter a search text</p>}
        </div>
        <button className={formValid === true ? "searchIt valid" : "searchIt invalid"} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default HomePage;
