import React, { useState, useEffect } from "react";
import ShowList from "../components/ShowList";
import ShowListHeading from "../components/ShowListHeading";
import SearchBar from "../components/SearchBar";

function MyShows() {
  const [shows, setShows] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("react-shows-app-watched") !== undefined) {
      setWatched(JSON.parse(localStorage.getItem("react-shows-app-watched")));
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-shows-app-watched", JSON.stringify(items));
  };

  const addWatchedShow = (show) => {
    let newWatchedList = [show];
    if (Array.isArray(watched)) {
      newWatchedList = [...watched, show];
    }

    setWatched(newWatchedList);
    saveToLocalStorage(newWatchedList);
  };

  const removeWatchedShow = (show) => {
    const newWatchedList = watched.filter(
      (watchedShow) => watchedShow.id !== show.id
    );
    setWatched(newWatchedList);
    saveToLocalStorage(newWatchedList);
  };

  return (
    <div className="container-fluid show-app">
      <div className="row d-flex align-items-center justify-content-center mt-4 mb-4">
        <ShowListHeading heading="Search Results" />
        <SearchBar setShows={setShows} />
      </div>

      <div className="row">
        <ShowList
          shows={shows}
          handleShowClick={addWatchedShow}
          overlay="Add to Watch History"
        />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <ShowListHeading heading="Watch History" />
      </div>

      <div className="row">
        <ShowList
          shows={watched}
          handleShowClick={removeWatchedShow}
          overlay="Remove Show"
        />
      </div>
    </div>
  );
}

export default MyShows;
