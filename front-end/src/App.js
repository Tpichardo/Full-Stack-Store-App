import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./Pages/Index";
import FourOFour from "./Pages/FourOFour.js";
import Home from "./Pages/Home.js";
import New from "./Pages/New.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/boutique">
            <Index />
          </Route>
          <Route path="/boutique/new">
            <New />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
