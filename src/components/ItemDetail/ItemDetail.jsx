import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({name, price, img, category, description, stock}) => {
    return (
        <article>
            <h1>{name}</h1>
            <img src={img} />
            <p>{category}</p>
            <p>Descripcion: {description}</p>
            <h1>{price}</h1>
            <ItemCount stock={stock}/>
        </article>
    )
}

export default ItemDetail