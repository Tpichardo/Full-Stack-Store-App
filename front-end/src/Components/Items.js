import axios from "axios";
import { useState, useEffect, } from 'react';
import { apiURL } from "../util/apiURL.js";
import Item from "./Item";

const API = apiURL();

function Items() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`${API}/boutique`).then(
            (response) => {
                setItems(response.data);
            },
            (e) => {
                console.log("axios error", e);
            }
        ).catch((e) => {
            console.log("caught", e);
        });
    }, []);

    return (
        <div>
            {items.map(item => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    )
}

export default Items;