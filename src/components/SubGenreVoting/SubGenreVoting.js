import React from "react";
import "./SubGenreVoting.css";
import Button from "../Button/Button";
import { ResponsiveBar } from "@nivo/bar";

const SubGenreVoting = ({ artist }) => {
  const data = [
    {
      name: artist?.data?.subgenres[0].name,
      percentage: artist?.data?.subgenres[0].vote_percentage,
    },
    {
      name: artist?.data?.subgenres[1].name,
      percentage: artist?.data?.subgenres[1].vote_percentage,
    },
  ];

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
        <div className="subgenre_voting_bars">
          <ResponsiveBar
            data={data}
            keys={["percentage"]}
            indexBy="name"
            margin={{ top: 0, right: 10, bottom: 50, left: 10 }}
            padding={0.8}
            colors="#fff"
            layout="horizontal"
            axisBottom={null}
            axisTop={null}
            axisLeft={{
              tickSize: 0,
              tickPadding: 0,
            }}
            enableLabel={false}
            isInteractive={false}
          />
        </div>
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
