import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.jsx";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  const [data, error, loading, fetchData] = useFetch();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    const url = `https://unogsng.p.rapidapi.com/search?query=${query}`;
    fetchData(url);
  };

  useEffect(() => {
    if (data) {
      // console.log("Data fetched in Search:", data);
      props.setShows(data.results);
    }
  }, [data]);

  return (
    <>
      <form className="col col-sm-4 d-flex" onSubmit={handleQuerySubmit}>
        <input
          className="form-control"
          value={query}
          onChange={handleInputChange}
          placeholder="Type to search"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Submit
          </button>
        </div>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: Data not found</p>}
    </>
  );
};

export default SearchBar;
