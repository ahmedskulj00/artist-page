import React from "react";
import "./ArtistContent.css";
import Button from "../Button/Button";
import Plus from "../../assets/images/icons/plus-white.svg";
const ArtistContent = ({ artist }) => {
  return (
    <div className="artist_content_container">
      <div className="artist_content_inner_container">
        <p className="label">ORIGIN</p>
        <div className="artist_content">
          <p>{artist?.data?.country.name}</p>
        </div>
        <p className="label">GENRE</p>
        <div className="artist_content">
          <p>{artist?.data?.genre.name}</p>
        </div>
        <p className="label">SUBGENRES</p>
        <div className="subgenres_container">
          {artist?.data?.subgenres.map((subgenre) => (
            <div className="artist_content" key={subgenre.id}>
              <p>{subgenre.name}</p>
            </div>
          ))}
          <Button
            content={<img src={Plus} width="15px" />}
            width="30px"
            height="30px"
            isPrimary={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistContent;
