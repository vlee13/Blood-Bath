import React from "react";
import { Link } from "react-router-dom";
import lycan18 from "../images/lycan18.gif";
import LYCAN14 from "../images/LYCAN14.gif";
import LYCAN13 from "../images/LYCAN13.gif";
import LYCAN06 from "../images/LYCAN06.gif";
import LYCAN25 from "../images/LYCAN25.gif";
import LYCANKING from "../images/LYCANKING.gif";
import GLOW from "../images/GLOW.gif";
import DF99 from "../images/DF99.gif";
import X from "../images/X.png";

const SZN3Main = () => {
  return (
    <div>
      <h1 className="blood-bath">🩸 BLOOD BATH</h1>
      <div classname="szns">
        <Link to="/">
          <h2 className="szn1Link">SZN 1</h2>
        </Link>
        <Link to="/szn2">
          <h2 className="szn2Link">SZN 2</h2>
        </Link>
        <Link to="/szn3">
          <h2 className="szn3Link">SEMI-FINAL</h2>
        </Link>
      </div>
      <div className="fighters-container">
        <div className="lycan-container">
          <h2
            style={{
              color: "red",
              fontFamily: `"Permanent Marker", "cursive"`,
              fontSize: "27px",
              textDecoration: "underline",
            }}
          >
            LYCANS
          </h2>
          <div>
            <img src={LYCAN14} alt="avatar" />
            <Link to="/szn3-round1">
              <h3>CH3XICAN</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN13} alt="avatar" />
            <Link to="/szn3-round2">
              <h3>DEADJED</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN25} alt="avatar" />
            {/* <img src={X} alt="lose" style={{ position: "absolute" }} /> */}
            <Link to="/szn3-round3">
              <h3>LIZARD</h3>
            </Link>
          </div>
          <div>
            <img src={lycan18} alt="avatar" />
            <Link to="/szn3-round4">
              <h3>EROWID</h3>
            </Link>
          </div>
        </div>
        <div>
          <h2 style={{ margin: "35px auto" }}>ROUNDS</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div className="df-container">
          <h2
            style={{
              color: "red",
              fontFamily: `"Permanent Marker", "cursive"`,
              fontSize: "27px",
              textDecoration: "underline",
            }}
          >
            CHALLENGERS
          </h2>
          <div>
            <Link to="/szn3-round1">
              <h3>UTZ</h3>
            </Link>
            <img src={LYCAN06} alt="avatar" />
          </div>

          <div>
            <Link to="/szn3-round2">
              <h3>FARMERJOE</h3>
            </Link>
            <img src={LYCANKING} alt="avatar" />
          </div>
          <div>
            <Link to="/szn3-round3">
              <h3>MACNUTZ</h3>
            </Link>
            <img src={GLOW} alt="avatar" />
          </div>
          <div>
            <Link to="/szn3-round4">
              <h3>NONNY</h3>
            </Link>
            <img src={DF99} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SZN3Main;
