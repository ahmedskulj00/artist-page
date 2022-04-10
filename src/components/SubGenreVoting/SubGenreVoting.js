import React from "react";
import "./SubGenreVoting.css";
import Button from "../Button/Button";
const SubGenreVoting = () => {
  return (
    <div className="subgenre_voting_container">
      <div className="subgenre_voting_title_container">
        <h4>VOTE FOR SUBGENRES</h4>
      </div>
      <div className="subgenre_voting_content">
        <p>
          Dont agree with the subgenres? Add the ones you think are missing or
          vote for existing to get yours on top!
        </p>
        <div className="subgenre_voting_bars"></div>
        <div className="subgenre_voting_button_container">
          <Button
            content="Vote now"
            isPrimary={true}
            specialButton={true}
            width="240px"
            height="40px"
          />
        </div>
      </div>
    </div>
  );
};

export default SubGenreVoting;
