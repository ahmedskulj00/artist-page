import React from "react";
import "./SocialMedia.css";
import Button from "../Button/Button";
import Plus from "../../assets/images/icons/plus-white.svg";
import { mockedIcons } from "../../mocked_data/mockedIcons";
const SocialMedia = ({ artist }) => {
  return (
    <div className="socialmedia_container">
      <div className="socialmedia_inner_container">
        {mockedIcons.map((icon) => (
          <img src={icon.black} alt={icon.name} key={icon.id} />
        ))}
      </div>
      <Button
        content={<img src={Plus} width="15px" alt="plus" />}
        width="30px"
        height="30px"
        isPrimary={true}
      />
    </div>
  );
};

export default SocialMedia;
