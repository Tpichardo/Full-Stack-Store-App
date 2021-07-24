import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Item({ item }) {
  return (
    <ul>
      <li style={{ listStyleType: "none" }}>
        <Container>
          <Image
            src={item.url}
            style={{ width: 250 }}
            alt={item.name}
            className="rounded mx-auto d-block"
          />
          <Link to={`/boutique/${item.id}`}>{item.name}</Link>
        </Container>
      </li>
    </ul>
  );
}

export default Item;