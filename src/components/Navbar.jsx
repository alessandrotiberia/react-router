import { Link } from "react-router";

//creo navbar dove collego dove contattarci, chi siamo ecc
function Navbar() {

    return <>
    <nav>
        <ul>
            <li><a href="/">Chi siamo</a></li>
            <li><a href="/">Prodotti</a></li>
            <li><a href="/">Contattaci</a></li>
        </ul>
    </nav>
    </>
}
export default Navbar;