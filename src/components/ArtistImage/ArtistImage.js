import React from "react";
import "./ArtistImage.css";

const ArtistImage = ({ source }) => {
  return (
    <>
      <img src={source} className="artist_image" alt="artist_image" />
    </>
  );
};

export default ArtistImage;
