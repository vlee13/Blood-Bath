import React from "react";
import LYCAN20 from "../images/LYCAN20.gif";
import GLOW from "../images/GLOW.gif";

const Round4 = () => {
  return (
    <div className="rounds">
      <h2>Round 4</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN20} alt="avatar" />
            <h4>
              OWNER: DORTHFADER |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #20</span>
            </h4>
            <h3>FINAL STATS: 27 HP | 5 STR</h3>
          </div>
        </div>
        <div style={{ width: "27vw" }}>
          <h2
            style={{ textDecoration: "underline", color: "red", margin: "0" }}
          >
            Base Stats:
          </h2>
          <h3>LYCAN: 26 HP | 5 STR</h3>
          <h3>GLOW UP: 25 HP | 5 STR</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Trait Power-ups:
          </h2>
          <h3>LYCAN DF Cap +1 HP</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Special Ability:
          </h2>
          <h3>GLOW UP: 1 additional attack slot</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={GLOW} alt="avatar" />
            <h3>
              OWNER: SNKRZ93 |{" "}
              <span style={{ color: "red" }}>FIGHTER: GLOW UP</span>
            </h3>
            <h3>FINAL STATS: 25 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round4;
