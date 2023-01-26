import React, { useState, useEffect } from "react";
import showsData from "../showsData";
import useFetch from "../hooks/useFetch";
import ShowList from "../components/ShowList";
// import SynopsisModal from "../components/SynopsisModal";

const Home = () => {
  const [newShows, setNewShows] = useState([]);
  const [show, setShow] = useState({});
  const [data, error, loading, fetchData] = useFetch();
  const [synopsis, setSynopsis] = useState(false);
  const today = new Date();
  const date = today.toISOString().substring(0, 10);
  const url = `https://unogsng.p.rapidapi.com/search?newdate=${date}&limit=10`;
  // const url = `https://unogsng.p.rapidapi.com/search?newdate=2023-01-26&limit=10`;
  // console.log(date);

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

  // const handleSynopsis = (show) => {
  //   if (newShows.length === 0) {
  //     setShow(show);
  //     setSynopsis(true);
  //   }
  // };

  const handleSynopsis = () => {
    console.log("blah blah ");
  };

  // function handleClose() {
  //   setShow({});
  //   setSynopsis(false);
  // }

  return (
    <div className="home-container">
      {/* {synopsis && <SynopsisModal show={show} handleClose={handleClose} />} */}
      <div className="title-block">
        <h4 className="page-title">DON'T KNOW WHAT TO WATCH?</h4>
      </div>
      <div className="container-fluid show-app">
        <div className="row bottom-block">
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
