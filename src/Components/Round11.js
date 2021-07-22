import React from "react";
import LYCAN11 from "../images/LYCAN11.gif";
import DF99 from "../images/DF99.gif";

const Round11 = () => {
  return (
    <div className="rounds">
      <h2>Round 11</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN11} alt="avatar" />
            <h3>
              OWNER: FORGE |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #11</span>
            </h3>
            <h3>FINAL STATS: 28 HP | 7 STR</h3>
          </div>
        </div>
        <div style={{ width: "27vw" }}>
          <h2
            style={{ textDecoration: "underline", color: "red", margin: "0" }}
          >
            Base Stats:
          </h2>
          <h3>LYCAN: 26 HP | 5 STR</h3>
          <h3>DEAD FREAK: 24 HP | 4 STR</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Trait Power-ups:
          </h2>
          <h3>LYCAN 3 Eyes +1 STR</h3>
          <h3>LYCAN Rainbow Teeth +1 STR</h3>
          <h3>LYCAN Curse Mark +1 HP</h3>
          <h3>LYCAN Rainbow Eyes +1 HP</h3>
          <h3>DF "The End" Tatoo +1 STR</h3>
          <h3>DF Earrings +1 HP</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={DF99} alt="avatar" />
            <h3>
              OWNER: NONNY |{" "}
              <span style={{ color: "red" }}>FIGHTER: DEAD FREAK #099</span>
            </h3>
            <h3>FINAL STATS: 25 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round11;
