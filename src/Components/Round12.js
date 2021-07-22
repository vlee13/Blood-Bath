import React from "react";
import LYCAN12 from "../images/LYCAN12.gif";
import DF81 from "../images/DF81.gif";

const Round12 = () => {
  return (
    <div className="rounds">
      <h2>Round 12</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN12} alt="avatar" />
            <h3>
              OWNER: SIDDLULLA |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #12</span>
            </h3>
            <h3>FINAL STATS: 29 HP | 6 STR</h3>
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
          <h3>LYCAN Armor +3 HP</h3>
          <h3>LYCAN Fireball +1 STR</h3>
          <h3>DF Shadow +1 STR</h3>
          <h3>DF Asymmetry +1 HP</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Special Ability:
          </h2>
          <h3>DF SHADOW: 1 slot deals 1/2 life</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={DF81} alt="avatar" />
            <h4>
              OWNER: BOSTONBOB |{" "}
              <span style={{ color: "red" }}>FIGHTER: DEAD FREAK #021</span>
            </h4>
            <h3>FINAL STATS: 25 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round12;
