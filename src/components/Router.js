import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import MakePayment from "./pages/MakePayment";
import Confirmation from "./pages/Confirm/ConfirmPage";
import Checkout from "./pages/checkout/checkout";

function RouterData() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/confirmation">
          <Confirmation />
        </Route>
        {/* <Route path="/pagetwo" component={Pagetwo} /> */}
        <Route path="/makepayment">
          <MakePayment />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterData;
