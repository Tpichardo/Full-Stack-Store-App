import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Item({ item }) {
  return (
    <ul >
      <li style={{ listStyleType : "none" }}>
        <Container>
          <Image src={item.url} style={{ width: 200 }} alt={item.name} roundedCircle/>
          <Link to={`/boutique/${item.id}`}>{item.name}</Link>
        </Container>
      </li>
    </ul>
  );
}

export default Item;