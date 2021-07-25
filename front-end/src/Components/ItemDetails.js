import { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

import { Container, Image, Row, Button } from "react-bootstrap";
import { BsTrash } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi';

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
          <h5>Brand: {item.brand}</h5>
          <h5>Price: ${item.price}</h5>
          {JSON.stringify(item.in_stock) === "false" ? <h5 className="text-danger">Out of stock</h5> : <h5 className="text-success">In stock</h5>}
        </Container>{" "}
        <br></br>
        <div className="showItem"></div>
        <Link to="/boutique">
          <Button variant="outline-danger">Back</Button>
        </Link>{" "}
        <Link to={`/boutique/${item.id}/update`}>
          <Button variant="outline-danger">
            Make Hotter <FiEdit2 />
          </Button>
        </Link>{" "}
        <Button variant="outline-danger">
          Not Hot <BsTrash onClick={handleDelete} />
        </Button>{" "}
      </div>
    </div>
  );
}

export default withRouter(ItemDetails);
