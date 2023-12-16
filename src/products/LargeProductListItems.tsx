import {Product} from '../products'

export const LargeProductListItem = ({product}: {product: Product}) => {

    const {name, price, description, rating} = product;

    return (
        <>
            <h2>{name}</h2>
            <p>Price: {price} years</p>
            <h3>Description:</h3>
            <p>{description}</p>
            <p>Averate rating: {rating}</p>        
        </>
    )
}