import { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";


import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";


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
        <h1>{item.name}</h1>
        <h5>Brand: {item.brand}</h5>
        <h5>Category: {item.category}</h5>
        <h5>Price: ${item.price}</h5>
        <h5>In stock: {JSON.stringify(item.in_stock)}</h5>


        <img src={item.url} style={{ width: 350 }} alt={item.name} />


        <Container>
          <Row className="justify-content-md-center">
            <Image
              src={item.url}
              style={{ width: 300 }}
              alt={item.name}
              className="rounded mx-auto d-block"
              thumbnail
            />
          </Row>
        </Container>{" "}
        <br></br>

        <div className="showItem"></div>
        <Link to="/boutique">
          <Button variant="outline-danger">Back</Button>
        </Link>{" "}
        <Link to={`/boutique/${item.id}/update`}>
          <Button variant="outline-danger">Update</Button>
        </Link>{" "}
        <Button variant="outline-danger" onClick={handleDelete}>
          Delete
        </Button>{" "}
      </div>
    </div>
  );
}

export default withRouter(ItemDetails);
