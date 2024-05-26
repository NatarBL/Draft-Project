import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import LineChart from "../components/LineChart";
import "../styles.css";
import Navbar from "./NavBar";
import { Heading } from "@chakra-ui/react";

/* Return player rank in total PPR */
function getAvg(data, player) {
  let allPPR = [];
  let rank = 1;

  /* Make array of all PPR */
  for (let i in data) {
    allPPR[i] = data[i].totalPPR;
  }

  allPPR = allPPR.sort().reverse();
  for (let j in allPPR) {
    if (player.totalPPR < allPPR[j]) rank += 1;
  }
  return rank;
}

const Player = () => {
  const location = useLocation();
  const { from } = location.state;
  const data = from;

  const { slug } = useParams();
  const player = data.find((x) => x.longname === slug);

  const rank = getAvg(data, player);

  const points = player.ppr_by_week;
  const labels = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
    "Week 7",
    "Week 8",
    "Week 9",
    "Week 10",
    "Week 11",
    "Week 12",
    "Week 13",
    "Week 14",
    "Week 15",
    "Week 16",
    "Week 17",
  ];

  const [timeline, setTimeline] = useState({
    labels: labels,
    datasets: [
      {
        label: "PPR",
        data: points,
        backgroundColor: ["rgba(75,192,192,1)"],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <Heading as="h4" size="md">
        <Navbar />
      </Heading>
      <div className="player-container">
        <div className="image-cropper">
          <img
            src={`./src/components/imgs/${player.id}.png`}
            alt={player.longname}
            className="playerImg"
          ></img>
        </div>
        <h1 className="title">{player.longname}</h1>
        <div className="stats-container1">
          <div className="subdata2">{player.position}</div>
          <div className="subdata2">#{player.jersey}</div>
          <div className="subdata2">{player.team}</div>
        </div>
        <div className="stats-container2">
          <div className="ppr">
            <h5>FPTS/GAME</h5>
            <div className="subdata">{player.avgPPR}</div>
            <div className="subdata">{player.totalPPR}</div>
            <div className="subdata">PPR Avg</div>
            <div className="subdata">PPR Total</div>
          </div>
          <div className="rank">
            <h5>RANK</h5>
            <div className="subdata">{rank}</div>
            <div className="subdata">{rank}</div>
            <div className="subdata">{player.position}</div>
            <div className="subdata">Overall</div>
          </div>
          <div className="statistics">
            <h5>Statistics</h5>
            <div className="subdata3">Age</div>
            <div className="subdata3">Height</div>
            <div className="subdata3">Weight</div>
            <div className="subdata3">{player.age}</div>
            <div className="subdata3">{player.height}</div>
            <div className="subdata3">{player.weight}</div>
          </div>
        </div>
        <div className="stats-container3">
          <div style={{ width: 800, margin: 50 }}>
            <LineChart chartData={timeline} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
