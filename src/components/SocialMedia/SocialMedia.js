import React, { useState } from "react";
import "./SocialMedia.css";
import Button from "../Button/Button";
import Plus from "../../assets/images/icons/plus-white.svg";
import { mockedIcons } from "../../mocked_data/mockedIcons";

const SocialMedia = ({ artist }) => {
  const [color, setColor] = useState();

  return (
    <div className="socialmedia_container">
      <div className="socialmedia_inner_container">
        {artist?.data?.social_links.map((social_link, index) => (
          <a
            href={social_link.link}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            {mockedIcons.map((icon, index) =>
              icon.name === social_link.channel ? (
                <img
                  src={color === index ? icon.color : icon.black}
                  alt="icon"
                  key={index}
                  onMouseOver={() => setColor(index)}
                  onMouseOut={() => setColor(null)}
                />
              ) : null
            )}
          </a>
        ))}
      </div>
      <Button
        content={<img src={Plus} width="15px" alt="plus" />}
        width="30px"
        height="30px"
        isPrimary={true}
        id="plus_button"
      />
    </div>
  );
};

export default SocialMedia;
