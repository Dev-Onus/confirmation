import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import MakePayment from "./pages/MakePayment";
import Confirmation from "./pages/Confirm/ConfirmPage";
import PageFooter from "./pages/Review/ReviewPage";
import Checkout from "./pages/checkout/checkout";
import Schedule from "./pages/schedulePayment/schedule";
import ZellePay from "./pages/zellePay/zellePay";
import ChooseBills from "./pages/choosebills/chooseBills";
import Login from "./pages/Login/login";

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

        <Route path="/footer">
          <PageFooter />
        </Route>

        <Route path="/makepayment">
          <MakePayment />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/schedule">
          <Schedule />
        </Route>

        <Route path="/zellepay">
          <ZellePay />
        </Route>

        <Route path="/choosebills">
          <ChooseBills />
        </Route>
        
        <Route path="/login">
          <Login />
        </Route>

      </Switch>
    </Router>
  );
}

export default RouterData;
