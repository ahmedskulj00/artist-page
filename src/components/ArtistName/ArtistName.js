import React from "react";
import "./ArtistName.css";
import TrendingIcon from "../../assets/images/icons/hot.svg";
import PopUpModal from "../PopUpModal/PopUpModal";
const ArtistName = ({ artist }) => {
  return (
    <>
      <div className="artist_detail_name_container">
        <h1 className="artist_detail_name">{artist?.data?.name}</h1>
        <div className="subgenre_container">
          <PopUpModal></PopUpModal>
        </div>
        {artist?.data?.trending === true ? (
          <img
            src={TrendingIcon}
            alt="trending_icon"
            className="trending_icon"
          />
        ) : null}
      </div>
    </>
  );
};

export default ArtistName;
