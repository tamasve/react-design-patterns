import { Person } from "../people";
import { Product } from "../products";

export const NumberedList = ({
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
                <>
                    <h3>- {i + 1} -</h3>
                    <ItemComponent key={i} {...{[resourceName]: item}} />
                </>
            ))}
        </>
    )
}