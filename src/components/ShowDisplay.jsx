import React from "react";

const ShowDisplay = (props) => {
  return (
    <div className="d-flex flex-row justify-content-center">
      <div>
        <img src={props.show.src} alt={props.show.title} />
      </div>
      <div className="d-flex flex-column col-6 p-4">
        <h3 className="p-2">{props.show.title}</h3>
        <p className="p-2">{props.show.synopsis}</p>
      </div>
    </div>
  );
};

export default ShowDisplay;
