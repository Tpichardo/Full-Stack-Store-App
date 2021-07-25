import img from '../Images/gilwgsEDIT.png'
import Image from "react-bootstrap/Image"

export default function Home() {
    return (
        <div className="Home">
            <h2>Welcome</h2>
            <h3>to the Boujee Betty Boutique</h3>
            <Image className="img-fluid" src={img} alt="Get in loser, we are going shopping" />
        </div>
    )
}