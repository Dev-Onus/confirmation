import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pageone from "./pages/Pageone";
import Pagetwo from "./pages/Pagetwo";
import Pagehome from "./pages/Pagehome";

function RouterData() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Pagehome />
        </Route>

        <Route path="/pageone">
          <Pageone />
        </Route>
        <Route path="/pagetwo" component={Pagetwo} />
      </Switch>
    </Router>
  );
}

export default RouterData;
