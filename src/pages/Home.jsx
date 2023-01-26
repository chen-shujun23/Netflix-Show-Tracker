import React, { useState, useEffect, useRef } from "react";
import showsData from "../showsData";
import useFetch from "../hooks/useFetch";
import ShowList from "../components/ShowList";
import SynopsisModal from "../components/SynopsisModal";

const Home = () => {
  const [newShows, setNewShows] = useState([]);
  const [data, error, loading, fetchData] = useFetch();
  const [show, setShow] = useState();
  const [synopsis, setSynopsis] = useState(false);
  const today = new Date();
  const oneWeekAgo = today.setDate(today.getDate() - 7);
  const date = today.toISOString().substring(0, 10);
  const url = `https://unogsng.p.rapidapi.com/search?newdate=${date}&limit=10`;
  const title = show.title.replace(/&#39;/g, "'");

  console.log(date);

  useEffect(() => {
    fetchData(url);
  }, []);

  useEffect(() => {
    if (data?.results === undefined) {
      setNewShows([]);
    } else {
      setNewShows(data.results);
    }
  }, [data]);

  const handleSynopsis = (show) => {
    if (newShows.length !== 0) {
      setShow(show);
      console.log("set", show);
      setSynopsis(true);
      console.log(show.synopsis);
    }
  };

  // const handleSynopsis = () => {
  //   "blah";
  // };

  function handleClose() {
    setShow({});
    setSynopsis(false);
  }

  return (
    <div className="d-flex flex-column">
      <div className="p-4 d-flex align-items-center justify-content-center">
        <h4>DON'T KNOW WHAT TO WATCH?</h4>
      </div>
      <div className="p-3 d-flex align-items-center justify-content-center">
        <img src={show.img} />
        <h1>{title}</h1>
        <p>{show.synopsis}</p>
      </div>
      <div className="p-3 d-flex align-items-center justify-content-center">
        <h6>Check out these new releases!</h6>
      </div>
      <div className="container-fluid home-pg">
        <div className="row">
          <ShowList
            shows={newShows}
            handleShowClick={handleSynopsis}
            overlay="Check it out"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* 
      {synopsis && (
        <SynopsisModal
          handleClose={handleClose}
          synopsis={show.current.synopsis}
          title={show.current.title}
        />
      )} */
}
