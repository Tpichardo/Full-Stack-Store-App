import axios from "axios";
import { useState, useEffect, } from 'react';
import { apiURL } from "../util/apiURL.js";
import Item from "./Item";

import { Container, Row } from "react-bootstrap";


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
            <Container fluid="xs">
                <Row className="row-cols-3">
                    {items.map(item => {
                        return (
                            <div key={item.id} className="col">
                                <Item item={item} />
                            </div>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Items;