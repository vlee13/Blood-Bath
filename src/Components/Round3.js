import React from "react";
import LYCAN22 from "../images/LYCAN22.gif";
import GLOW from "../images/GLOW.gif";

const Round3 = () => {
  return (
    <div className="rounds">
      <h2>Round 3</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN22} alt="avatar" />
            <h4>
              OWNER: BUYHIGH |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #22</span>
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
          <h3>GLOW UP: 25 HP | 5 STR</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Trait Power-ups:
          </h2>
          <h3>LYCAN Curse Mark +1 HP</h3>
          <h3>LYCAN Rainbow Teeth +1 STR</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Special Ability:
          </h2>
          <h3>GLOW UP: 1 additional attack slot</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={GLOW} alt="avatar" />
            <h4>
              OWNER: MACNUTZ |{" "}
              <span style={{ color: "red" }}>FIGHTER: GLOW UP</span>
            </h4>
            <h3>FINAL STATS: 25 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round3;
