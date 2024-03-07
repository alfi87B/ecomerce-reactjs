const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src="/carrito-01.svg" alt="Carrito de compras" />
            <span className="item-count">{3}</span>
        </div>
    );
}

export default CartWidget;