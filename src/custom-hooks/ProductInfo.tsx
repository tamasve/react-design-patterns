/**
 * This is a version for the LargeProductListItems.tsx, but here 'product'
 * comes not as a props from the parent but from the data source Hook
 * Parent gives here only the id
 */

import axios from 'axios';
import {useDataSource} from './useDataSource';


// -- SOURCES --
const serverResource = (resourceUrl: string) => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
};

const localStorageResource = (key: string) => () => {
    return localStorage.getItem(key);
}

// -- COMPONENT --

export const ProductInfo = ({productId}: {productId: string}) => {

    // this way the usage is straightforward and parametrizable
    const product = useDataSource( serverResource(`/products/${productId}`) );
    const message = useDataSource( localStorageResource('message') );

    const {name, price, description, rating} = product || {};

    return (
        <>
            <h2>{name}</h2>
            <p>Price: {price} years</p>
            <h3>Description:</h3>
            <p>{description}</p>
            <p>Averate rating: {rating}</p>
            <p>Message: {message}</p>     
        </>
    )
}