import React from "react";
import LYCAN01 from "../images/LYCAN01.gif";
import DF99 from "../images/DF99.gif";

const SZN2Round6 = () => {
  return (
    <div className="rounds">
      <h2>Round 6</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN01} alt="avatar" />
            <h4>
              OWNER: YVKI |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #01</span>
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
          <h3>LYCAN Firstborn +1 STR</h3>
          <h3>LYCAN Fireball +1 STR</h3>
          <h3>DF "The End" Tattoo +1 STR</h3>
          <h3>DF Earrings +1 HP</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={DF99} alt="avatar" />
            <h4>
              OWNER: NONNY |{" "}
              <span style={{ color: "red" }}>FIGHTER: DEAD FREAK #099</span>
            </h4>
            <h3>FINAL STATS: 25 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SZN2Round6;
