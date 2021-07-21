import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "./util/apiURL.js";
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
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.name}>{item.name}</li>

        ))}
      </ul>
      <h1>HELLO!</h1>
    </div>
  );
}

export default App;
