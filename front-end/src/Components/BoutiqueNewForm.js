import axios from "axios";
import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
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
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={item.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of item"
        />
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          value={item.brand}
          placeholder="Brand of item"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={item.category}
          placeholder="Item category"
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={item.price}
          placeholder="Item price"
          onChange={handleTextChange}
        />
        <label htmlFor="in_stock">In Stock:</label>
        <input
          id="in_stock"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={item.in_stock}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(BoutiqueNewForm);
