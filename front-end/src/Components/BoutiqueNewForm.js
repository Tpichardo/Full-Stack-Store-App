import axios from "axios";
import { useState } from "react";
import { useHistory, Link, withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { apiURL } from "../util/apiURL.js";

const API = apiURL();

function BoutiqueNewForm() {
  let history = useHistory();

  const addItem = (newItem) => {
    axios
      .post(`${API}/boutique`, newItem)
      .then(
        () => {
          history.push(`/boutique`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };
  const [item, setItem] = useState({
    name: "",
    brand: "",
    category: "",
    price: null,
    in_stock: true,
  });

  const handleTextChange = (event) => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setItem({ ...item, in_stock: !item.in_stock });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(item);
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
        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <Link to={"/boutique"}>
        <Button>Cancel</Button>
      </Link>
    </Container >
  );
  // <div className="New">
  //   <form onSubmit={handleSubmit}>
  //     <label htmlFor="name">Name:</label>
  //     <input
  //       id="name"
  //       value={item.name}
  //       type="text"
  //       onChange={handleTextChange}
  //       placeholder="Name of item"
  //     />
  //     <label htmlFor="brand">Brand:</label>
  //     <input
  //       id="brand"
  //       type="text"
  //       value={item.brand}
  //       placeholder="Brand of item"
  //       onChange={handleTextChange}
  //     />
  //     <label htmlFor="category">Category:</label>
  //     <input
  //       id="category"
  //       type="text"
  //       value={item.category}
  //       placeholder="Item category"
  //       onChange={handleTextChange}
  //     />
  //     <label htmlFor="price">Price:</label>
  //     <input
  //       id="price"
  //       type="number"
  //       value={item.price}
  //       placeholder="Item price"
  //       onChange={handleTextChange}
  //     />
  //     <label htmlFor="in_stock">In Stock:</label>
  //     <input
  //       id="in_stock"
  //       type="checkbox"
  //       onChange={handleCheckboxChange}
  //       checked={item.in_stock}
  //     />
  //     <br />
  //     <input type="submit" />
  //   </form>
  // </div>
  // );
}

export default withRouter(BoutiqueNewForm);
