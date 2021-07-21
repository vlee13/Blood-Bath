import React from "react";
import LYCAN12 from "../images/LYCAN12.gif";
import DF81 from "../images/DF81.gif";

const Round12 = () => {
  return (
    <div className="rounds">
      <h2>Round 1</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN12} alt="avatar" />
            <h3>
              OWNER: EROWID |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #18</span>
            </h3>
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
          <h3>LYCAN Laser Eye Green +1 STR</h3>
          <h3>LYCAN Laser Eye Pink +1 STR</h3>
          <h3>LYCAN Fireball +1 STR</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Special Ability:
          </h2>
          <h3>SHADOW LYCAN: 1 slot deals 1/2 life</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={DF81} alt="avatar" />
            <h3>
              OWNER: GLEPASTEUR |{" "}
              <span style={{ color: "red" }}>FIGHTER: DEAD FREAK #021</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round12;
