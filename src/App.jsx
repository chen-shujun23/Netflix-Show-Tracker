import React, { useState, useEffect, createContext } from "react";
import ShowList from "./components/ShowList";
import ShowListHeading from "./components/ShowListHeading";
import SearchBar from "./components/SearchBar";
import AddWatched from "./components/AddWatched";

// export const DataContext = createContext();

function App() {
  const [shows, setShows] = useState([]);
  const [watched, setWatched] = useState([]);

  // console.log("Shows set in App", shows);

  const addWatchedShow = (show) => {
    const newWatchedList = [...watched, show];
    setWatched(newWatchedList);
  };

  return (
    // <DataContext.Provider value={{ shows, setShows }}>
    <div className="container-fluid show-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <ShowListHeading heading="Shows" />
        <SearchBar setShows={setShows} />
      </div>

      <div className="row">
        <ShowList
          shows={shows}
          handleWatchedClick={addWatchedShow}
          watchedComponent={AddWatched}
        />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <ShowListHeading heading="Watch History" />
      </div>

      <div className="row">
        <ShowList shows={watched} />
      </div>
    </div>
    // </DataContext.Provider>
  );
}

export default App;
