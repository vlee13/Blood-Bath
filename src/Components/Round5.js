import React from "react";
import LYCAN16 from "../images/LYCAN16.gif";
import DF92 from "../images/DF92.gif";

const Round5 = () => {
  return (
    <div className="rounds">
      <h2>Round 5</h2>
      <h1 style={{ color: "red", paddingBottom: "30px" }}>🥊FIGHT!!!🥊</h1>
      <div className="round-container">
        <div className="round-lycan">
          <div className="round-lycanCard">
            <img src={LYCAN16} alt="avatar" />
            <h4>
              OWNER: ALB3RTKUO |{" "}
              <span style={{ color: "red" }}>FIGHTER: LYCAN #16</span>
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
          <h3>DEAD FREAK: 24 HP | 4 STR</h3>
          <h2 style={{ textDecoration: "underline", color: "red" }}>
            Trait Power-ups:
          </h2>
          <h3>LYCAN Curse Mark +1 HP</h3>
          <h3>LYCAN Priest +1 HP</h3>
          <h3>DF Tattoos +1 HP</h3>
          <h3>DF Close Mouth Fangs +1 HP</h3>
        </div>

        <div className="round-df">
          <div className="round-dfCard">
            <img src={DF92} alt="avatar" />
            <h4>
              OWNER: ADVMHIRSCH |{" "}
              <span style={{ color: "red" }}>FIGHTER: DEAD FREAK #092</span>
            </h4>
            <h3>FINAL STATS: 26 HP | 4 STR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Round5;
