import React from "react";
import LYCAN06 from "../images/LYCAN06.gif";
import DF77 from "../images/DF77.gif";

const SZN2Round5 = () => {
  return (
    <div className="rounds">
      <h2>Round 5</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN06} alt="avatar" />
            <h4>
              OWNER: UTZ |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #06</span>
            </h4>
            <h3>FINAL STATS: 26 HP | 7 STR</h3>
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
          <h3>LYCAN Shadow +1 STR</h3>
          <h3>LYCAN Split Jaw +1 STR</h3>
          <h3>DF Snake Tongue +1 STR</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Special Ability:
          </h2>
          <h3>SHADOW LYCAN: 1 slot deals 1/2 life</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={DF77} alt="avatar" />
            <h4>
              OWNER: YANK |{" "}
              <span style={{ color: "red" }}>FIGHTER: DEAD FREAK #077</span>
            </h4>
            <h3>FINAL STATS: 24 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SZN2Round5;
