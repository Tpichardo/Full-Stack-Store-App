import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FourOFour from "./Pages/FourOFour.js";
import Home from "./Pages/Home.js";

const API = apiURL();

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/boutique`)
      .then(
        (response) => setItems(response.data),
        (error) => console.log("get", error)
      )
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
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
