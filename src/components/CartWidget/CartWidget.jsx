import './CartWidget.css'
import cart from "../../assets/img_elementos/carrito-01.svg";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useCart();
    return (
        <Link to="/cart" className="CartWidget">
            <img
                src={cart}
                style={{ width: 35 }}
                alt="cart-widget"
                className='CartImg'
            />
            {totalQuantity}
        </Link>
    );
};

export default CartWidget;