import { Person } from "../people";
import { Product } from "../products";

export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}: {
    items: Person[] | Product[],
    resourceName: string,
    itemComponent: React.Component
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