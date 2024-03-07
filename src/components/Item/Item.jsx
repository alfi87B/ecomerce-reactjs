import { Link } from 'react-router-dom';

const Item = ({ id, name, img, category, price }) => {
    return (
        <article className="card">
            <h1>{name}</h1>
            <img src={img} alt={name} />
            <p>{category}</p>
            <h1>$ {price}</h1>
            <Link to={`/detail/${id}`}>Ver detalles</Link>
        </article>
    );
};

export default Item;
