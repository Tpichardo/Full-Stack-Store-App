import { Link } from "react-router-dom";

function Item({ item }) {
    return (
        <ul>
            <li>
                <img src={item.url} alt={item.name} />
                <Link to={`/boutique/${item.id}`}>{item.name}</Link>
            </li>
        </ul>
    );
}

export default Item;