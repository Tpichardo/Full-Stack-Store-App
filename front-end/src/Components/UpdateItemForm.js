import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

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
    <div className="updateForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Item Name:</label>
        <input
          id="name"
          value={item.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter Item Name..."
          required
        />

        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          name="brand"
          value={item.brand}
          placeholder="Enter Brand..."
          onChange={handleTextChange}
        />

        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={item.category}
          placeholder="Enter Category..."
          onChange={handleTextChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="text"
          name="price"
          value={item.price}
          placeholder="Enter Price..."
          onChange={handleTextChange}
        />

        <label htmlFor="in_stock">In Stock:</label>
        <input
          id="in_stock"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={item.in_stock}
        />

        <label htmlFor="url">Image URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={item.url}
          placeholder="http://"
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
      <Link to={`/boutique/${id}`}>
        <button>Cancel!</button>
      </Link>
    </div>
  );
}
