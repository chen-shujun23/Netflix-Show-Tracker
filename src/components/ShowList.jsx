import React from "react";

const ShowList = (props) => {
  console.log(props);

  return (
    <>
      {props?.shows !== undefined &&
        props.shows !== null &&
        props.shows !== undefined &&
        props.shows.map((show, index) => (
          <div
            className="image-container d-flex justify-content-center col-2 "
            key={index}
          >
            <img
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
