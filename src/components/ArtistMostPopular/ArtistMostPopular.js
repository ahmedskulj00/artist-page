import React from "react";
import "./ArtistMostPopular.css";
import { ResponsiveBar } from "@nivo/bar";

const ArtistMostPopular = ({ artist }) => {
  const data = [
    {
      city: artist?.data?.popularity[0].city,
      percentage: artist?.data?.popularity[0].percentage,
    },
    {
      city: artist?.data?.popularity[1].city,
      percentage: artist?.data?.popularity[1].percentage,
    },
    {
      city: artist?.data?.popularity[2].city,
      percentage: artist?.data?.popularity[2].percentage,
    },
    {
      city: artist?.data?.popularity[3].city,
      percentage: artist?.data?.popularity[3].percentage,
    },
    {
      city: artist?.data?.popularity[4].city,
      percentage: artist?.data?.popularity[4].percentage,
    },
  ];

  return (
    <div className="mostpopular_container">
      <div className="mostpopular_title">
        <h5>MOST POPULAR IN</h5>
      </div>
      <ResponsiveBar
        data={data}
        keys={["percentage"]}
        indexBy="city"
        margin={{ top: 60, right: 0, bottom: 50, left: 30 }}
        padding={0.8}
        colors="#000"
        layout="horizontal"
        axisBottom={null}
        axisTop={null}
        axisLeft={{
          tickSize: 0,
          tickPadding: 5,
        }}
        enableLabel={false}
        isInteractive={false}
      />
    </div>
  );
};

export default ArtistMostPopular;
