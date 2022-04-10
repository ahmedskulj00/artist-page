import React, { useEffect } from "react";
import "./ArtistDetail.css";
import useArtist from "../../context/ArtistContext";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import ArtistImage from "../../components/ArtistImage/ArtistImage";
import ArtistName from "../../components/ArtistName/ArtistName";
import ArtistFollow from "../../components/ArtistFollow/ArtistFollow";
import ArtistContent from "../../components/ArtistContent/ArtistContent";

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
              <ArtistName artist={artist} />
              <ArtistFollow />
              <ArtistContent artist={artist} />
            </div>
          </div>
          <div className="artistdetail_mostpopular"></div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
