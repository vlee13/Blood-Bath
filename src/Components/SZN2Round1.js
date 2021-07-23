import React from "react";
import lycan18 from "../images/lycan18.gif";
import DFWARG from "../images/DFWARG.gif";

const EightFighters1 = () => {
  return (
    <div className="rounds">
      <h2>Round 1</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={lycan18} alt="avatar" />
            <h4>
              OWNER: EROWID |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #18</span>
            </h4>
            <h3>FINAL STATS: 26 HP | 8 STR</h3>
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
          <h3>LYCAN Shadow +1 STR</h3>
          <h3>DF Animal +1 HP & +1 STR</h3>
          <h3>DF Warging +1 HP</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Special Ability:
          </h2>
          <h3>SHADOW LYCAN: 1 slot deals 1/2 life</h3>
          <h3>DEAD FREAK Warg: 1 slot deals death blow</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={DFWARG} alt="avatar" />
            <h4>
              OWNER: BALLENTERPZ |{" "}
              <span style={{ color: "red" }}>FIGHTER: DEAD FREAK #021</span>
            </h4>
            <h3>FINAL STATS: 26 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EightFighters1;
