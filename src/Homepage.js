import React, { useState, useEffect } from "react";
import { addOrUpdateParticipant, getAllParticipants } from "./backend/request";
import InputForm from "./form";
import Header from "./Header";
import Participants from "./Participants";
import RatioTable from "./RatioTable";
import Summary from "./Summary";
import Confetti from "react-confetti";
function HomePage() {
  const { innerWidth: width, innerHeight: height } = window,
    [showConfetti, setShowConfetti] = useState(true),
    [uniqueParticipants, setUniqueParticipants] = useState({}),
    [ratioAndCounts, setRatioAndCounts] = useState({
      girlPower: 0,
      girlRatio: 1,
      boyPower: 0,
      boyRatio: 1,
    }),
    [newBet, setNewBet] = useState(false),
    [top, setTop] = useState(null),
    escFunction = (event) => {
      if (event.key === "Escape") {
        setNewBet(newBet ? false : true);
      }
    };
  useEffect(() => {
    const girlPower = Object.values(uniqueParticipants)
        .filter((p) => p.choice === "girl")
        .map((p) => p.count)
        .reduce(
          (accumulator, currentValue) =>
            parseInt(accumulator) + parseInt(currentValue),
          0
        ),
      boyPower = Object.values(uniqueParticipants)
        .filter((p) => p.choice === "boy")
        .map((p) => p.count)
        .reduce(
          (accumulator, currentValue) =>
            parseInt(accumulator) + parseInt(currentValue),
          0
        ),
      totalCount = girlPower + boyPower,
      girlRatio = totalCount
        ? parseFloat((totalCount + 1) / (girlPower + 1)).toFixed(2)
        : 1,
      boyRatio = totalCount
        ? parseFloat((totalCount + 1) / (boyPower + 1)).toFixed(2)
        : 1;

    setRatioAndCounts({
      girlPower,
      girlRatio,
      boyPower,
      boyRatio,
    });
    let tempList = {},
      tempTop = "",
      tempTopCount = 0;
    Object.values(uniqueParticipants).forEach((p) => {
      if (tempList[p.name]) {
        tempList[p.name] = parseInt(p.count) + parseInt(tempList[p.name]);
      } else {
        tempList[p.name] = parseInt(p.count);
      }
    });
    Object.keys(tempList).forEach((k) => {
      if (tempList[k] >= tempTopCount) {
        if (tempTop !== "" && tempTopCount === tempList[k]) {
          tempTop = tempTop + ", " + k.charAt(0).toUpperCase() + k.slice(1);
        } else {
          tempTop = " " + k.charAt(0).toUpperCase() + k.slice(1);
        }
        tempTopCount = tempList[k];
      }
    });
    setTop(tempTop);
  }, [uniqueParticipants]);
  useEffect(() => {
    getAllParticipants((result) => {
      setUniqueParticipants(result);
    });
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });

  const submitForm = (name, choice, count) => {
    if (name && choice && count) {
      const lowerName = name.toLowerCase(),
        existing = uniqueParticipants[lowerName + choice];
      let finalCount = count;
      if (existing) {
        finalCount = parseInt(count) + parseInt(existing.count);
      }
      const participant = {
        name: lowerName,
        choice,
        count: finalCount,
      };
      addOrUpdateParticipant(participant, () => {
        getAllParticipants((result) => {
          setUniqueParticipants(result);
        });
      });
    }
  };

  setInterval(() => {
    setShowConfetti(!showConfetti);
  }, 10000);
  return (
    <div
      className="pt-5 pe-5 ps-5"
      style={{
        minHeight: 1500,
        background:
          "linear-gradient(to right, rgb(255 90 247), rgb(74 152 255))",
      }}
    >
      {showConfetti && <Confetti width={width} height={width} />}

      <div className="row shadow mb-5">
        <Header
          forBaby={
            parseInt(ratioAndCounts.boyPower + ratioAndCounts.girlPower) * 5
          }
        />
      </div>
      <div className="row shadow">
        <div className="col-md-4 ml-auto">
          <RatioTable ratioAndCounts={ratioAndCounts} />
        </div>
        <div className="col-md-5 pe-5 mx-auto">
          <Summary top={top} />
        </div>
        <div className="col-md-3 pe-5 ms-auto">
          <Participants
            participants={Object.values(uniqueParticipants)}
            ratioAndCounts={ratioAndCounts}
          />
        </div>
      </div>
      {newBet && (
        <div className="col-md-3 mb-2 mx-auto fixed-bottom shadow p-3">
          <InputForm onSubmit={submitForm} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
