import React from "react";
import LYCAN29 from "../images/LYCAN29.gif";
import DFWARG from "../images/DFWARG.gif";

const Round2 = () => {
  return (
    <div className="rounds">
      <h2>Round 2</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN29} alt="avatar" />
            <h4>
              OWNER: DEADTAPES |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #29</span>
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
          <h3>LYCAN Rainbow Teeth +1 STR</h3>
          <h3>LYCAN Curse Mark +1 HP</h3>
          <h3>DF Animal +1 HP & +1 STR</h3>
          <h3>DF Warging +1 HP</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Special Ability:
          </h2>
          <h3>DEAD FREAK Warg: 1 slot deals death blow</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={DFWARG} alt="avatar" />
            <h4>
              OWNER: BALLENTERPZ |{" "}
              <span style={{ color: "red" }}>FIGHTER: DEAD FREAK #020</span>
            </h4>
            <h3>FINAL STATS: 26 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round2;
