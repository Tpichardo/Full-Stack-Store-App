import axios from "axios";
import { useState, useEffect } from "react";
import { Switch, Router, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL.js";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import FourOFour from "./Pages/FourOFour.js";

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
      <Route path="*">
        <FourOFour />
      </Route>
    </Router>
    </div>
  );
}

export default App;
