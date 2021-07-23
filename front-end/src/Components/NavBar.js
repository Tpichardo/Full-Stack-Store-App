import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/">Home</Link> {" "}
                <Link to="/boutique">What's Hot</Link>
            </h1>
        </nav>
    )
}