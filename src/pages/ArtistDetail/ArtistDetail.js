import React, { useEffect } from "react";
import "./ArtistDetail.css";
import useArtist from "../../context/ArtistContext";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import TrendingIcon from "../../assets/images/icons/hot.svg";
import Heart from "../../assets/images/icons/heart-white.svg";
import ShareWhite from "../../assets/images/icons/share-white.svg";
import ArtistImage from "../../components/ArtistImage/ArtistImage";
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
          <ArtistImage source={artist?.data?.image} />
        </div>
        <div className="artistdetail_content">
          <div className="artist_detail">
            <div className="artist_detail_inner">
              <Button content="Booking request" width="217px" height="37px" />
              <div className="artist_detail_name_container">
                <h1 className="artist_detail_name">{artist?.data?.name}</h1>
                <div className="subgenre_container"></div>
                {artist?.data?.trending === true ? (
                  <img
                    src={TrendingIcon}
                    alt="trending_icon"
                    className="trending_icon"
                  />
                ) : null}
              </div>
              <div className="buttons_container">
                <div className="follow_button_container">
                  <Button
                    content={
                      <img
                        src={Heart}
                        width="20px"
                        alt="heart_icon"
                        className="heart_icon"
                      />
                    }
                    width="36px"
                    height="36px"
                    isPrimary={true}
                  />
                  <Button
                    content="Follow"
                    isPrimary={true}
                    width="180px"
                    height="36px"
                  />
                </div>
                <Button
                  content={
                    <img
                      src={ShareWhite}
                      width="20px"
                      alt="share_icon"
                      className="share_icon"
                    />
                  }
                  width="36px"
                  height="36px"
                  isPrimary={true}
                  id="share_button"
                />
              </div>
            </div>
          </div>
          <div className="artistdetail_mostpopular"></div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
