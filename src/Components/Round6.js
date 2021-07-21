import React from "react";
import LYCAN34 from "../images/LYCAN34.gif";
import DF33 from "../images/DF33.gif";

const Round6 = () => {
  return (
    <div className="rounds">
      <h2>Round 6</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN34} alt="avatar" />
            <h4>
              OWNER: BEAN |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #34</span>
            </h4>
            <h3>FINAL STATS: 27 HP | 6 STR</h3>
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
          <h3>LYCAN Curse Mark +1 HP</h3>
          <h3>LYCAN Bald Head +1 STR</h3>
          <h3>DF Upside Down +1 HP</h3>
          <h3>DF Mohawk +1 STR</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={DF33} alt="avatar" />
            <h4>
              OWNER: BUFFALOSPACE |{" "}
              <span style={{ color: "red" }}>FIGHTER: DEAD FREAK #033</span>
            </h4>
            <h3>FINAL STATS: 25 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round6;
