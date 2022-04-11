import React, { useState } from "react";
import "./ArtistContent.css";
import Button from "../Button/Button";
import Plus from "../../assets/images/icons/plus-white.svg";
import PopUpModal from "../PopUpModal/PopUpModal";
import SubGenreVoting from "../SubGenreVoting/SubGenreVoting";
const ArtistContent = ({ artist }) => {
  const [hovered, setHovered] = useState(false);

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
          <div
            className="subgenre_button_container"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Button
              content={<img src={Plus} width="15px" alt="plus" />}
              width="30px"
              height="30px"
              isPrimary={true}
            />
            {hovered ? (
              <PopUpModal>
                <SubGenreVoting artist={artist} />
              </PopUpModal>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistContent;
