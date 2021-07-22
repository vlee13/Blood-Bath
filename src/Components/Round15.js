import React from "react";
import LYCAN17 from "../images/LYCAN17.gif";
import GLOW from "../images/GLOW.gif";

const Round15 = () => {
  return (
    <div className="rounds">
      <h2>Round 15</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN17} alt="avatar" />
            <h4>
              OWNER: DEEPIKA |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #17</span>
            </h4>
            <h3>FINAL STATS: 28 HP | 5 STR</h3>
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
          <h3>LYCAN Eyeliner +1 HP</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Special Ability:
          </h2>
          <h3>GLOW UP: 1 addition attack slot</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={GLOW} alt="avatar" />
            <h4>
              OWNER: BEN G |{" "}
              <span style={{ color: "red" }}>FIGHTER: GLOW UP</span>
            </h4>
            <h3>FINAL STATS: 25 HP | 5 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round15;
