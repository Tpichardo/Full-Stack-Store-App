import { Link } from "react-router-dom";

import { CardGroup, Card } from "react-bootstrap";


function Item({ item }) {
  return (
    <CardGroup>
      <Card className='m-5' border="danger" style={{ width: '18rem' }}>
        <Card.Title>{item.name}</Card.Title>
        <Link to={`/boutique/${item.id}`}></Link>
        <Card.Img variant="top"
          src={item.url}
          style={{ width: 250 }}
          alt={item.name}
          className="rounded mx-auto d-block "
        />
        <Link />
        ${(item.price).toLocaleString("en-US")}
      </Card>
    </CardGroup>
  );
}

export default Item;
