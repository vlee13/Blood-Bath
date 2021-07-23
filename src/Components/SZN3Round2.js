import React from "react";
import LYCAN13 from "../images/LYCAN13.gif";
import LYCANKING from "../images/LYCANKING.gif";

const SZN3Round2 = () => {
  return (
    <div className="rounds">
      <h2>Round 2</h2>
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
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Trait Power-ups:
          </h2>
          <h3>JED Laser Eyes +1 STR</h3>
          <h3>JED Fireball +1 STR</h3>
          <h3>JED Curse Mark +1 HP</h3>
          <h3>JOE Crazy Eye +1 HP</h3>
          <h3>JOE Fireball +1 STR</h3>
          <h3>JOE Crown +2 STR</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={LYCANKING} alt="avatar" />
            <h4>
              OWNER: FARMERJOE |{" "}
              <span style={{ color: "red" }}>FIGHTER: DEAD FREAK #033</span>
            </h4>
            <h3>FINAL STATS: 27 HP | 8 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SZN3Round2;
