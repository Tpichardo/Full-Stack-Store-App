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

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API}/boutique/${id}`);
      history.push("/boutique");
      // do we need to update our frontend application state by deleting the bookmark?
    } catch (e) {
      console.error(e);
    }
  };
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
        <Link to={`/boutique/${item.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default withRouter(ItemDetails);
