import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AddWatched from "./AddWatched";

const ShowList = (props) => {
  // console.log("Ready to display showlist", props.shows);

  const WatchedComponent = props.watchedComponent;

  return (
    <>
      {props.shows.map((show, index) => (
        <div
          className="image-container d-flex justify-content-center col"
          key={show.id}
        >
          <img src={show.img} alt={show.title}></img>
          <div
            onClick={() => props.handleWatchedClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <WatchedComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowList;
