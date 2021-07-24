import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./Pages/Index";
import FourOFour from "./Pages/FourOFour.js";
import Home from "./Pages/Home.js";
import UpdateItem from "./Components/UpdateItemForm";
import Show from "./Pages/Show";
import New from "./Pages/New.js";

import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
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
          <Route exact path="/boutique/:id">
            <Show />
          </Route>
          <Route path="/boutique/:id/update">
            <UpdateItem />
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
