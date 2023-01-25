import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ShowList = (props) => {
  return (
    <>
      {props.shows.map((show, index) => (
        <div
          className="image-container d-flex justify-content-center col-2 "
          key={index}
        >
          <LazyLoadImage
            src={show.img}
            alt={show.title}
            onClick={() => props.handleShowClick(show)}
          />
          <div
            onClick={() => props.handleShowClick(show)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            {props.overlay}
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowList;
