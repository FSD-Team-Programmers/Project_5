import React, { useState, useEffect } from "react";
import axios from "axios";
import "./meeting.css";
import ShowPlaces from "../showPlaces";

const Meeting = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios
      .get(`/places/type/meeting`)
      .then((result) => {
        if (result.status == 200) {
          setPlaces(result.data);
        }
      })
  }, []);

  return (
    <>
      <div className="funeralsPlace">
        <ShowPlaces places={places} />
      </div>
    </>
  );
};

export default Meeting;
