import React from "react";
import LYCAN13 from "../images/LYCAN13.gif";
import DF94 from "../images/DF94.gif";

const Round8 = () => {
  return (
    <div className="rounds">
      <h2>Round 8</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN13} alt="avatar" />
            <h4>
              OWNER: DEADJED |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #13</span>
            </h4>
            <h3>FINAL STATS: 27 HP | 7 STR</h3>
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
          <h3>LYCAN Laser Eyes +1 STR</h3>
          <h3>LYCAN Fireball +1 STR</h3>
          <h3>LYCAN Curse Mark +1 HP</h3>
          <h3>DF Shadow +1 STR</h3>
          <h3>DF Dual-color X eyes +1 HP</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Special Ability:
          </h2>
          <h3>DF SHADOW: 1 slot deals 1/2 life</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={DF94} alt="avatar" />
            <h4>
              OWNER: JENNIFER |{" "}
              <span style={{ color: "red" }}>FIGHTER: DEAD FREAK #094</span>
            </h4>
            <h3>FINAL STATS: 25 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round8;
