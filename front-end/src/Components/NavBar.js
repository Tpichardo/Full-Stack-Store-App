import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/">
          <Button variant="outline-danger" size="lg">
            Home
          </Button>
        </Link>{" "}
        <Link to="/boutique">
          <Button variant="outline-danger" size="lg">
            What's Hot?
          </Button>
        </Link>{" "}
        <Link to="/boutique/new">
          <Button variant="outline-danger" size="lg">
            Add Item!
          </Button>
        </Link>{" "}
      </h1>
    </nav>
  );
}
