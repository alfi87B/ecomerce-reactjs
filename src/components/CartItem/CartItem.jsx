import './CartItem.css'
import { useCart } from "../../context/CartContext";

const CartItem = ({id, name, quantity, price}) => {
    const {removeItem} = useCart() 
    const handleRemove = (id) => {
      removeItem(id);
    };

  return (
    <section className='CartTotal'>
      <article className="CardCartItem">
        <header className="HeaderCartItem">
          <h2 className="ItemHeaderCartItem">{name}</h2>
        </header>
        <section className="ContainerItemCartItem">
          <p className="ItemCartItem">Cantidad: {quantity}</p>
          <p className="ItemCartItem">Precio x unidad: $ {price}</p>
        </section>
        <footer className="ItemFooterCartItem">
          <p className="InfoCartItem">Subtotal: $ {price * quantity}</p>
          <button className="ButtonCartItem" onClick={() => handleRemove(id)}>
            X
          </button>
        </footer>
      </article>
    </section>
  );
}
export default CartItem;
