import './ItemList.css'
// import {memo} from "react"
import Item from "../Item/Item.jsx"


const ItemList = ({products}) => {
    console.log("reder")
    return (
    <section className="ListGroup">
        <div>
            {products.map((prod) => {
            return <Item key={prod.id} {...prod} />;
            })}
        </div>
    </section>
    );
}

// export default memo(ItemList)

export default ItemList