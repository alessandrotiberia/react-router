import { Link } from "react-router-dom";

//creo navbar dove collego dove contattarci, chi siamo ecc
function Navbar() {

    return <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chi-siamo">Chi siamo</Link></li>
            <li><Link to="/prodotti">i nostri prodotti</Link></li>
        </ul>
    </nav>
    </>
}
export default Navbar;