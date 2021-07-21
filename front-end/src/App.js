import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Index from "./Pages/Index";
import FourOFour from "./Pages/FourOFour.js";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/boutique">
            <Index />
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
