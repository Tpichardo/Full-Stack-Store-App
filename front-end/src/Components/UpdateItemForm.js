import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

import { Container, Form, Button } from "react-bootstrap";


export default function UpdateItemForm() {
  let { id } = useParams();
  let history = useHistory();
  const API = apiURL();

  const [item, setItem] = useState([
    {
      name: "",
      brand: "",
      category: "",
      price: "",
      in_stock: false,
      url: "",
    },
  ]);

  const updateItem = (updatedItem) => {
    axios
      .put(`${API}/boutique/${id}`, updatedItem)
      .then(
        () => {
          history.push(`/boutique/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (e) => {
    setItem({ ...item, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setItem({ ...item, in_stock: !item.in_stock });
  };

  useEffect(() => {
    axios.get(`${API}/boutique/${id}`).then(
      (response) => setItem(response.data),
      (error) => history.push(`/not-found`)
    );
  }, [id, history, API]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateItem(item, id);
  };

  return (
    <Container>
      <h1>Edit Item</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name </Form.Label>
          <Form.Control
            value={item.name}
            type="text"
            required
            onChange={handleTextChange}
            placeholder="Item Name"
          />
        </Form.Group>
        <Form.Group controlId="brand">
          <Form.Label>Brand </Form.Label>
          <Form.Control
            value={item.brand}
            type="text"
            required
            onChange={handleTextChange}
            placeholder="What's the Brand?"
          />
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category </Form.Label>
          <Form.Control
            value={item.category}
            type="text"
            required
            onChange={handleTextChange}
            placeholder="What's the Category?"
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price </Form.Label>
          <Form.Control
            value={item.price}
            type="number"
            required
            onChange={handleTextChange}
            placeholder="How much is it?"
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            id={item.in_stock}
            label="In stock?"
            onChange={handleCheckboxChange}
            checked={item.in_stock}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="url">
          <Form.Label>Url</Form.Label>
          <Form.Control
            type="text"
            pattern="http[s]*://.+"
            required
            value={item.url}
            placeholder="http://"
            onChange={handleTextChange}
          />
        </Form.Group>
        <Button variant="outline-danger" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <Link to={`/boutique/${id}`}>
        <Button variant="outline-secondary"> Cancel </Button>
      </Link>
    </Container >
  );
}