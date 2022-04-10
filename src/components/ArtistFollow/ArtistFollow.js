import React from "react";
import "./ArtistFollow.css";
import Heart from "../../assets/images/icons/heart-white.svg";
import ShareWhite from "../../assets/images/icons/share-white.svg";
import Button from "../Button/Button";

const ArtistFollow = () => {
  return (
    <>
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
    </>
  );
};

export default ArtistFollow;
