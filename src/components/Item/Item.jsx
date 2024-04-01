import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ id, name, img, category, price }) => {
    return (
        <article className="CardItem">
                <header className="ItemHeader">
                    <h1>{name}</h1>
                </header>
                <picture>
                    <img className="ItemImg" src={img} style={{ width: 320 }}  />
                </picture>
                <section>
                    <p className="Iteminfo">Category: {category}</p>
                    <p className="Iteminfo">Precio: $ {price}</p>
                </section>
                <footer className="ItemFooter">
                    <Link to={`/detail/${id}`} className="VerDetalle" >
                        Ver Detalle
                    </Link>
                </footer>
        </article>
    );
};

export default Item;