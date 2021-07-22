import { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API = apiURL();

function ItemDetails({ history, match }) {
  const [item, setItem] = useState([]);

  const { id } = match.params;

  useEffect(() => {
    axios
      .get(`${API}/boutique/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((e) => {
        console.error(e);
        history.push("/not-found");
      });
  }, [id, history]);

  return (
    <div>
      <div className="showItemDetails">
        <h1>Name: {item.name}</h1>
        <h5>Brand: {item.brand}</h5>
        <h5>Category: {item.category}</h5>
        <h5>Price: ${item.price}</h5>
        <h5>In stock: {JSON.stringify(item.in_stock)}</h5>
        <img src={item.url} alt={item.name} />
        <div className="showItem"></div>
        <Link to="/boutique">
          <button>Back</button>
        </Link>
        <Link to={`/boutique/${item.id}/update`}>
          <button>Update</button>
        </Link>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default withRouter(ItemDetails);
