import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import logoIco from '../../assets/img_elementos/LOGOZtm-BLANCO.png';

const NavBar = () => {
return (
    <nav className="NavBar">
        <Link to={"/"}> 
            <img src={logoIco} alt="Logo" />
        </Link>
        <section className='Categories'>
            <NavLink
            to={"/category/Remera"}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
            >
            REMERAS
            </NavLink>
            <NavLink
            to={"/category/Gorra"}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
            >
            GORRAS
            </NavLink>
            <NavLink
            to={"/category/Short"}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
            >
            SHORT
            </NavLink>
        </section>
        <CartWidget />
    </nav>
);
}

export default NavBar