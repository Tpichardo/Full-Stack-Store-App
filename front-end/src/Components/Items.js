import axios from "axios";
import { useState, useEffect, } from 'react';
import { apiURL } from "../util/apiURL.js";
import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"

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
            <Container>
                <Row className="row-cols-4">
                    {items.map(item => {
                        return (
                            <div key={item.id} className="col">
                                <Item item={item} />
                            </div>
                        );
                    })};
                </Row>
            </Container>
        </div>
    )
}

export default Items;