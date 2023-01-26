import React, { useState, useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";
import ShowList from "../components/ShowList";
import ShowDisplay from "../components/ShowDisplay";

const Home = () => {
  const [data, error, loading, fetchData] = useFetch();
  const [newShows, setNewShows] = useState([]);
  const [show, setShow] = useState({});
  const today = new Date();
  today.setDate(today.getDate() - 7);
  const date = today.toISOString().substring(0, 10);
  const url = `https://unogsng.p.rapidapi.com/search?newdate=${date}&limit=10`;

  console.log(date);

  useEffect(() => {
    fetchData(url);
  }, []);

  useEffect(() => {
    if (data?.results === undefined) {
      setNewShows([]);
    } else {
      setNewShows(data.results);
      console.log("dataresults", newShows);
    }
  }, [data]);

  useEffect(() => {
    if (newShows && newShows.length > 0) {
      setShow({
        title: newShows[0].title,
        src: newShows[0].img,
        synopsis: newShows[0].synopsis,
      });
    }
  }, [newShows]);

  const handleShowClick = (item) => {
    setShow((prevState) => {
      return {
        ...prevState,
        title: item.title,
        src: item.img,
        synopsis: item.synopsis,
      };
    });
    console.log("Clicked", show);
  };

  return (
    <div className="d-flex flex-column">
      <div className="p-3 d-flex align-items-center justify-content-center">
        <h4 className="page-title">DON'T KNOW WHAT TO WATCH?</h4>
      </div>
      <div className="p-4 d-flex align-items-center justify-content-center">
        <ShowDisplay show={show} />
      </div>
      <div className="p-3 d-flex align-items-center justify-content-center">
        <h4 className="page-title">Check out this week's new releases!</h4>
      </div>
      <div className="container-fluid home-pg">
        <div className="row">
          <ShowList
            shows={newShows}
            handleShowClick={handleShowClick}
            overlay="Check it out"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
