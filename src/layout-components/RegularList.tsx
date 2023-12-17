import { FC } from "react";
import { Person } from "../people/people";
import { Product } from "../products/products";

export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}: {
    items: Person[] | Product[],
    resourceName: string,
    itemComponent: FC
}) => 
{
    return (
        <>
            {items.map((item, i) => (
                <ItemComponent key={i} {...{[resourceName]: item}} />
            ))}
        </>
    )
}