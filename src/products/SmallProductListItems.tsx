import {Product} from '../products'

export const SmallProductListItem = ({product}: {product: Product}) => {

    const {name, price} = product;

    return (
        <p>Name: {name} | Price: {price}</p>
    )
}