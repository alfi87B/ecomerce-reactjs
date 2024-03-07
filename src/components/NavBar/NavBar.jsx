import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="NavBar">
            <img src="/logo-ico.ico" alt="Zeppelint Cloth Logo" className="logo" />
            {/* <h3> Zeppelint Cloth</h3> */}
            <section>
                <Link to={"/category/remeras"}>Remeras</Link>
                <Link to={"/category/gorras"}>Gorras</Link>
                <Link to={"/category/buzos"}>Buzos</Link>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default NavBar 