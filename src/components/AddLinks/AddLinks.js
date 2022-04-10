import React from "react";
import "./AddLinks.css";
import Button from "../Button/Button";

const AddLinks = () => {
  return (
    <div className="addlinks_container">
      <div className="addlinks_title_container">
        <h4 className="addlinks_title">GOT MORE INFO?</h4>
      </div>
      <div className="addlinks_content_container">
        <p>
          Add Place's links so everyone can see their social media highlights.
        </p>
      </div>
      <div className="addlinks_button_container">
        <Button
          content="Add links"
          isPrimary={true}
          specialButton={true}
          width="240px"
          height="40px"
        />
      </div>
    </div>
  );
};

export default AddLinks;
