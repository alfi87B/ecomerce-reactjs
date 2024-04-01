import { useState } from "react";
import { useCart } from '../../context/CartContext.jsx';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";
import './Checkout.css';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const { cart, totalQuantity, getTotal, clearCart } = useCart();
  const total = getTotal();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createOrder = async () => {
    setLoading(true);
    try {
      const order = {
        buyer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          address: formData.address,
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date()
      };

      const orderRef = collection(db, "orders");
      await addDoc(orderRef, order);

      clearCart();
      setLoading(false);
      setOrderCreated(true);
    } catch (error) {
      console.error("Error creating order:", error);
      setLoading(false);
    }
  }

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if (orderCreated) {
    return <h1>La orden fue creada correctamente.</h1>;
  }

  return (
    <div className="Checkout">
      <h1>Por favor completa tus datos</h1>
      <form className="Formulario" onSubmit={createOrder}>
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="lastName">Apellido:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="address">Dirección:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <button type="submit">Generar Orden</button>
      </form>
    </div>
  );
}

export default Checkout;