import { Link } from "react-router-dom";
import { Container, Image } from "react-bootstrap";


function Item({ item }) {
  return (
    <Container>
      <Link to={`/boutique/${item.id}`}>
        <Image
          src={item.url}
          style={{ width: 250 }}
          alt={item.name}
          className="rounded mx-auto d-block"
        />
      </Link>
      {item.name}

    </Container>
  );
}

export default Item;