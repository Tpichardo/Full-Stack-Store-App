import axios from "axios";
import { useState, useEffect, } from 'react';
import { apiURL } from "../util/apiURL.js";
import Item from "./Item";

import { CardGroup, Container } from "react-bootstrap";


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
        <Container>
            <CardGroup className="m-5">
                {items.map(item => {
                    return (
                        <Item item={item} />
                    )
                })}
            </CardGroup>
        </Container>
    )
}

export default Items;