import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pageone from './pages/Pageone';
import Pagetwo from './pages/Pagetwo';
import Pagehome from './pages/Pagehome';

function confirmationRouter() {
  return (
      <Router>
    <Switch>
    <Route path="/"><Pagehome /></Route>,
    <Route path="/pageone">,
    <Route path="/pagetwo" component={Pagetwo} />
    </Switch>
    </Router>
  );
}

export default confirmationRouter;
