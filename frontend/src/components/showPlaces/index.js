import React from "react";
import { Link } from "react-router-dom";
import Rating from "../place/Raiting";

import "./showPlaces.css";

const ShowPlaces = ({ places }) => {
  const ShowCard = ({ place }) => {
    return (
      <>
        <div className="card">
          <img src={place.img} className="card-img-top image" alt="" />
          <div className="middle">
            <div className="text">More Details</div>
          </div>
        </div>
      </>
    );
  };

  const showPlaces = () => {
    return places.map((place) => (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-5" key={place.id}>
        <Link to={`/places/${place.type}/${place.place_id}`}>
          <ShowCard place={place} />
        </Link>
      </div>
    ));
  };

  return (
    <>
      <div className="container">
        <div className="row">{showPlaces()}</div>
      </div>
    </>
  );
};

export default ShowPlaces;
