import React from "react";
import { Link } from "react-router-dom";
import lycan18 from "../images/lycan18.gif";
import LYCAN20 from "../images/LYCAN20.gif";
import LYCAN14 from "../images/LYCAN14.gif";
import LYCAN13 from "../images/LYCAN13.gif";
import DFWARG from "../images/DFWARG.gif";
import GLOW from "../images/GLOW.gif";
import DF92 from "../images/DF92.gif";
import DF33 from "../images/DF33.gif";
import X from "../images/X.png";

{
  /* <img src={X} alt="lose" style={{ position: "absolute" }} /> */
}

const SZN2Main = () => {
  return (
    <div>
      <h1 className="blood-bath">🩸 BLOOD BATH</h1>
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
            <img src={lycan18} alt="avatar" />
            <Link to="/szn2-round1">
              <h3>EROWID</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN20} alt="avatar" />
            <Link to="/szn2-round2">
              <h3>DORTHFADER</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN14} alt="avatar" />
            <Link to="/szn2-round3">
              <h3>CH3XICAN</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN13} alt="avatar" />
            <Link to="/szn2-round4">
              <h3>DEADJED</h3>
            </Link>
          </div>
          <div>
            {/* <img src={LYCAN16} alt="avatar" /> */}
            <img src={X} alt="lose" style={{ position: "absolute" }} />
            <Link to="/szn2-round5">
              <h3>???</h3>
            </Link>
          </div>
          <div>
            {/* <img src={LYCAN34} alt="avatar" /> */}
            <img src={X} alt="lose" style={{ position: "absolute" }} />
            <Link to="/szn2-round6">
              <h3>???</h3>
            </Link>
          </div>
          <div>
            {/* <img src={LYCAN14} alt="avatar" /> */}
            <img src={X} alt="lose" style={{ position: "absolute" }} />
            <Link to="/szn2-round7">
              <h3>???</h3>
            </Link>
          </div>
          <div>
            {/* <img src={LYCAN13} alt="avatar" /> */}
            <img src={X} alt="lose" style={{ position: "absolute" }} />
            <Link to="/szn2-round8">
              <h3>???</h3>
            </Link>
          </div>
        </div>
        <div>
          <h2 style={{ margin: "45px auto" }}>ROUNDS</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
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
            DEAD FREAKS
          </h2>
          <div>
            <Link to="/szn2-round1">
              <h3>BALLENTERPZ</h3>
            </Link>
            <img src={DFWARG} alt="avatar" />
          </div>
          <div>
            <Link to="/szn2-round2">
              <h3>MACNUTZ</h3>
            </Link>
            <img src={GLOW} alt="avatar" />
          </div>

          <div>
            <Link to="/szn2-round3">
              <h3>ADVMHIRSCH</h3>
            </Link>
            <img src={DF92} alt="avatar" />
          </div>
          <div>
            <Link to="/szn2-round4">
              <h3>BUFFALOSPACE</h3>
            </Link>
            <img src={DF33} alt="avatar" />
          </div>
          <div>
            <Link to="/szn2-round5">
              <h3>???</h3>
            </Link>
            {/* <img src={GLOW} alt="avatar" /> */}
            <img src={X} alt="lose" style={{ position: "absolute" }} />
          </div>
          <div>
            <Link to="/szn2-round6">
              <h3>???</h3>
            </Link>
            {/* <img src={DF33} alt="avatar" /> */}
            <img src={X} alt="lose" style={{ position: "absolute" }} />
          </div>
          <div>
            <Link to="/szn2-round7">
              <h3>???</h3>
            </Link>
            {/* <img src={DF87} alt="avatar" /> */}
            <img src={X} alt="lose" style={{ position: "absolute" }} />
          </div>
          <div>
            <Link to="/szn2-round8">
              <h3>???</h3>
            </Link>
            {/* <img src={DF94} alt="avatar" /> */}
            <img src={X} alt="lose" style={{ position: "absolute" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SZN2Main;
