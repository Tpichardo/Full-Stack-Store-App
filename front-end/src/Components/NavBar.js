import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'



export default function NavBar() {
  return (
    <nav>
    
                <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
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

