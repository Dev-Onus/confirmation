import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Pageone from "./pages/Pageone";
import MakePayment from "./pages/MakePayment";

function RouterData() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/pageone">
          <Pageone />
        </Route>
        {/* <Route path="/pagetwo" component={Pagetwo} /> */}
        <Route path="/makepayment">
          <MakePayment />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterData;
