import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";


export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/">Home</Link> {" "}
                <Link to="/boutique">What's Hot</Link>
                <Button variant="primary">Test</Button>
            </h1>
        </nav>
    )
}