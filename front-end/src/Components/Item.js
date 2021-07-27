import { Link } from "react-router-dom";

import { Container, Image, Card } from "react-bootstrap";


function Item({ item }) {
  return (
    <Container>

      <Card className='mt-5' border="danger" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Link to={`/boutique/${item.id}`}>
            <Image
              src={item.url}
              style={{ width: 250 }}
              alt={item.name}
              className="rounded mx-auto d-block "
            />
          </Link>
          ${(item.price).toLocaleString("en-US")}

        </Card.Body>
      </Card>
    </Container>
  );
}

export default Item;
