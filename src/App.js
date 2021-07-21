import "./App.css";
import AllFighters from "./Components/AllFighters";
import { Switch, Route } from "react-router-dom";
import Round1 from "./Components/Round1";
import Round2 from "./Components/Round2";
import Round3 from "./Components/Round3";
import Round4 from "./Components/Round4";
import Round5 from "./Components/Round5";
import Round6 from "./Components/Round6";
import Round7 from "./Components/Round7";
import Round8 from "./Components/Round8";
import Round9 from "./Components/Round9";
import Round10 from "./Components/Round10";
import Round11 from "./Components/Round11";
import Round12 from "./Components/Round12";
import Round13 from "./Components/Round13";
import Round14 from "./Components/Round14";
import Round15 from "./Components/Round15";
import Round16 from "./Components/Round16";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <AllFighters {...props} />} />
        <Route exact path="/round1" render={(props) => <Round1 {...props} />} />
        <Route exact path="/round2" render={(props) => <Round2 {...props} />} />
        <Route exact path="/round3" render={(props) => <Round3 {...props} />} />
        <Route exact path="/round4" render={(props) => <Round4 {...props} />} />
        <Route exact path="/round5" render={(props) => <Round5 {...props} />} />
        <Route exact path="/round6" render={(props) => <Round6 {...props} />} />
        <Route exact path="/round7" render={(props) => <Round7 {...props} />} />
        <Route exact path="/round8" render={(props) => <Round8 {...props} />} />
        <Route exact path="/round9" render={(props) => <Round9 {...props} />} />
        <Route
          exact
          path="/round10"
          render={(props) => <Round10 {...props} />}
        />
        <Route
          exact
          path="/round11"
          render={(props) => <Round11 {...props} />}
        />
        <Route
          exact
          path="/round12"
          render={(props) => <Round12 {...props} />}
        />
        <Route
          exact
          path="/round13"
          render={(props) => <Round13 {...props} />}
        />
        <Route
          exact
          path="/round14"
          render={(props) => <Round14 {...props} />}
        />
        <Route
          exact
          path="/round15"
          render={(props) => <Round15 {...props} />}
        />
        <Route
          exact
          path="/round16"
          render={(props) => <Round16 {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
