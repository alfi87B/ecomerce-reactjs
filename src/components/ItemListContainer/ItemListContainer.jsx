import './ItemListContainer.css';
import PropTypes from 'prop-types'; 
import { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState( [] )
    const {categoryId} = useParams()

    useEffect( ()=> {
        const asynFuntions = categoryId ? getProductsByCategory : getProducts
        asynFuntions(categoryId)
        .then( res => {
            setProducts(res)
        })
        .catch(error => {
            console.log(error)
        })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired
};

export default ItemListContainer