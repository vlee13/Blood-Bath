import React from "react";
import lycan18 from "../images/lycan18.gif";
import LYCAN01 from "../images/LYCAN01.gif";
import LYCAN02 from "../images/LYCAN02.gif";
import LYCAN06 from "../images/LYCAN06.gif";
import LYCAN11 from "../images/LYCAN11.gif";
import LYCAN12 from "../images/LYCAN12.gif";
import LYCAN13 from "../images/LYCAN13.gif";
import LYCAN14 from "../images/LYCAN14.gif";
import LYCAN16 from "../images/LYCAN16.gif";
import LYCAN17 from "../images/LYCAN17.gif";
import LYCAN20 from "../images/LYCAN20.gif";
import LYCAN22 from "../images/LYCAN22.gif";
import LYCAN25 from "../images/LYCAN25.gif";
import LYCAN29 from "../images/LYCAN29.gif";
import LYCAN34 from "../images/LYCAN34.gif";
import LYCANKING from "../images/LYCANKING.gif";
import DF21 from "../images/DF21.gif";
import DF33 from "../images/DF33.gif";
import DF56 from "../images/DF56.gif";
import DF77 from "../images/DF77.gif";
import DF81 from "../images/DF81.gif";
import DF87 from "../images/DF87.gif";
import DF92 from "../images/DF92.gif";
import DF94 from "../images/DF94.gif";
import DF99 from "../images/DF99.gif";
import DFWARG from "../images/DFWARG.gif";
import GLOW from "../images/GLOW.gif";
import { Link } from "react-router-dom";

const AllFighters = () => {
  return (
    <div>
      <h1 className="blood-bath">🩸 BLOOD BATH 🩸</h1>
      <div className="fighters-container">
        <div className="lycan-container">
          <h2
            style={{
              color: "red",
              fontFamily: `"Permanent Marker", "cursive"`,
              fontSize: "30px",
            }}
          >
            LYCANS
          </h2>
          <div>
            <img src={lycan18} alt="avatar" />
            <Link to="/round1">
              <h3>EROWID</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN29} alt="avatar" />
            <Link to="/round2">
              <h3>DEADTAPES</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN22} alt="avatar" />
            <Link to="/round3">
              <h3>BUYHIGH</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN20} alt="avatar" />
            <Link to="/round4">
              <h3>DORTHFADER</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN16} alt="avatar" />
            <Link to="/round5">
              <h3>ALB3RTKUO</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN34} alt="avatar" />
            <Link to="/round6">
              <h3>BEAN</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN14} alt="avatar" />
            <Link to="/round7">
              <h3>CH3XICAN</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN13} alt="avatar" />
            <Link to="/round8">
              <h3>DEADJED</h3>
            </Link>
          </div>
          {/* <div>
            <img src={LYCAN06} alt="avatar" />
            <Link to="/round9">
              <h3>UTZ</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN02} alt="avatar" />
            <Link to="/round10">
              <h3>LYCANMORI</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN11} alt="avatar" />
            <Link to="/round11">
              <h3>FORGE</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN12} alt="avatar" />
            <Link to="/round12">
              <h3>SIDDLULLA</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN01} alt="avatar" />
            <Link to="/round13">
              <h3>YVKI</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN25} alt="avatar" />
            <Link to="/round14">
              <h3>LIZARD</h3>
            </Link>
          </div>
          <div>
            <img src={LYCAN17} alt="avatar" />
            <Link to="/round15">
              <h3>DEEPIKA</h3>
            </Link>
          </div>
          <div>
            <img src={LYCANKING} alt="avatar" />
            <Link to="/round16">
              <h3>FARMERJOE</h3>
            </Link>
          </div> */}
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
          {/* <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div> */}
        </div>
        <div className="df-container">
          <h2
            style={{
              color: "red",
              fontFamily: `"Permanent Marker", "cursive"`,
              fontSize: "30px",
            }}
          >
            DEAD FREAKS
          </h2>
          <div>
            <Link to="/round1">
              <h3>GLEPASTEUR</h3>
            </Link>
            <img src={DF21} alt="avatar" />
          </div>
          <div>
            <Link to="/round2">
              <h3>BALLENTERPZ</h3>
            </Link>
            <img src={DFWARG} alt="avatar" />
          </div>
          <div>
            <Link to="/round3">
              <h3>MACNUTZ</h3>
            </Link>
            <img src={GLOW} alt="avatar" />
          </div>
          <div>
            <Link to="/round4">
              <h3>SNKRZ93</h3>
            </Link>
            <img src={GLOW} alt="avatar" />
          </div>
          <div>
            <Link to="/round5">
              <h3>ADVMHIRSCH</h3>
            </Link>
            <img src={DF92} alt="avatar" />
          </div>
          <div>
            <Link to="/round6">
              <h3>BUFFALOSPACE</h3>
            </Link>
            <img src={DF33} alt="avatar" />
          </div>
          <div>
            <Link to="/round7">
              <h3>RAINDROP</h3>
            </Link>
            <img src={DF87} alt="avatar" />
          </div>
          <div>
            <Link to="/round8">
              <h3>JENNIFER</h3>
            </Link>
            <img src={DF94} alt="avatar" />
          </div>
          {/* <div>
            <Link to="/round9">
              <h3>AGRO23</h3>
            </Link>
            <img src={DF56} alt="avatar" />
          </div>
          <div>
            <Link to="/round10">
              <h3>YANK</h3>
            </Link>
            <img src={DF77} alt="avatar" />
          </div>
          <div>
            <Link to="/round11">
              <h3>NONNY</h3>
            </Link>
            <img src={DF99} alt="avatar" />
          </div>
          <div>
            <Link to="/round12">
              <h3>BOSTONBOB</h3>
            </Link>
            <img src={DF81} alt="avatar" />
          </div>
          <div>
            <Link to="/round13">
              <h3>ROVA</h3>
            </Link>
            <img src={GLOW} alt="avatar" />
          </div>
          <div>
            <Link to="/round14">
              <h3>REBELSTARR888</h3>
            </Link>
            <img src={GLOW} alt="avatar" />
          </div>
          <div>
            <Link to="/round15">
              <h3>BENG</h3>
            </Link>
            <img src={GLOW} alt="avatar" />
          </div>
          <div>
            <Link to="/round16">
              <h3>WOKE.GHOSTBABY</h3>
            </Link>
            <img src={GLOW} alt="avatar" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AllFighters;
