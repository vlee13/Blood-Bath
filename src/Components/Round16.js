import React from "react";
import LYCANKING from "../images/LYCANKING.gif";
import GLOW from "../images/GLOW.gif";

const Round16 = () => {
  return (
    <div className="rounds">
      <h2>Round 16</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCANKING} alt="avatar" />
            <h4>
              OWNER: FARMERJOE |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN KING</span>
            </h4>
            <h3>FINAL STATS: 27 HP | 8 STR</h3>
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
          <h3>LYCAN Crown +2 STR</h3>
          <h3>LYCAN Crazy Eye +1 HP</h3>
          <h3>LYCAN Fireball +1 STR</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Special Ability:
          </h2>
          <h3>GLOW UP: 1 additional attack slot</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={GLOW} alt="avatar" />
            <h4>
              OWNER: WOKE.GHOSTBABY |{" "}
              <span style={{ color: "red" }}>FIGHTER: GLOW UP</span>
            </h4>
            <h3>FINAL STATS: 25 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round16;
