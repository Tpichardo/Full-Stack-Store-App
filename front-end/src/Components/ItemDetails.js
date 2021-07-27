import { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import Reviews from "./Reviews.js";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const API = apiURL();

function ItemDetails({ history, match }) {
  const [item, setItem] = useState([]);

  const { id } = match.params;

  const deleteItem = async () => {
    try {
      await axios.delete(`${API}/boutique/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

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
    await deleteItem();
    history.push("/boutique");
  };

  return (
    <div>
      <div className="showItemDetails">
        <h1>Name: {item.name}</h1>
        <h5>Brand: {item.brand}</h5>
        <h5>Category: {item.category}</h5>
        <h5>Price: ${item.price}</h5>
        <h5>In stock: {JSON.stringify(item.in_stock)}</h5>
        <Container>
          <Row>
            <Image src={item.url} alt={item.name} roundedCircle />
          </Row>
        </Container>
        <div className="showItem"></div>
        <Link to="/boutique">
          <button>Back</button>
        </Link>
        <Link to={`/boutique/${item.id}/update`}>
          <button>Update</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <Reviews />
    </div>
  );
}

export default withRouter(ItemDetails);
