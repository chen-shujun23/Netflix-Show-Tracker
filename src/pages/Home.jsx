import React, { useState, useEffect } from "react";
import showsData from "../showsData";
import useFetch from "../hooks/useFetch";
import ShowList from "../components/ShowList";

const Home = () => {
  const [newShows, setNewShows] = useState(showsData);
  const [data, error, loading, fetchData] = useFetch();
  const [synopsis, setSynopsis] = useState(false);
  const today = new Date();
  const date = today.toISOString().substring(0, 10);
  const url = `https://unogsng.p.rapidapi.com/search?newdate=${date}&limit=10`;
  console.log(date);

  // useEffect(() => {
  //   fetchData(url);
  //   console.log(data);
  // }, [data]);

  console.log(newShows);

  const seeSynopsis = () => {
    console.log("blah blah ");
  };

  return (
    <div className="home-container">
      <div className="title-block">
        <h4 className="page-title">DON'T KNOW WHAT TO WATCH?</h4>
      </div>
      <div className="container-fluid show-app">
        <div className="row bottom-block">
          <ShowList
            shows={newShows}
            handleShowClick={seeSynopsis}
            overlay="Check it out"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
