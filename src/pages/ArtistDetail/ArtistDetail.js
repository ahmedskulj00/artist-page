import React, { useEffect } from "react";
import "./ArtistDetail.css";
import useArtist from "../../context/ArtistContext";
import { useParams } from "react-router-dom";

const ArtistDetail = () => {
  const { artist, getArtist } = useArtist();
  const { artist_uuid } = useParams();

  useEffect(() => {
    getArtist(artist_uuid);
  }, [artist_uuid]);

  return (
    <div className="artistdetail_container">
      <div className="artistdetail_innercontainer">
        <div className="artistdetail_image_container">
          <img
            src={artist?.data?.image}
            className="artist_image"
            alt="artist_image"
          />
        </div>
        <div className="artistdetail_content">
          <div className="artist_detail">
            <div className="artist_detail_inner"></div>
          </div>
          <div className="artistdetail_mostpopular"></div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
