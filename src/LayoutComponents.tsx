import { SplitScreen } from "./layout-components/SplitScreen";
import { SplitScreenII } from "./layout-components/SplitScreenII";
import { SplitScreenIII } from "./layout-components/SplitScreenIII";
import { RegularList } from "./layout-components/RegularList";
import { people } from "./people/people";
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { LargePersonListItem } from './people/LargePersonListItem';
import { products } from "./products/products";
import { SmallProductListItem } from "./products/SmallProductListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { NumberedList } from "./layout-components/NumberedList";
import { Modal } from "./layout-components/Modal";


const LeftHandComponent = ({name}: {name: string}) => {
    return <h2 style={{backgroundColor: 'lightgreen'}}>{name}</h2>
}

const RighttHandComponent = ({message}: {message: string}) => {
    return <p style={{backgroundColor: 'pink'}}>{message}</p>
}

// SplitScreens:
// 1st: 2 components as params
// 2nd: 2 components as children
// 3rd: my plus - any number of components as children + weights in an array
const weights: number[] = [1,4,2,3];

function LayoutComponents() {

    return (
        <>
            <Modal caption="Show first person">
                <LargePersonListItem person={people[0]} />
            </Modal>
            <Modal caption="Show message">
                Anyone would come for a cookie?
            </Modal>
            <h1>SplitScreen</h1>
            <SplitScreen
                left={LeftHandComponent}
                right={RighttHandComponent}
                leftWeight={2}
                rightWeight={7}
                leftProp="John"
                rightProp="Today is Friday"/>

            <SplitScreenII leftWeight={2} rightWeight={5}>
                <LeftHandComponent name="John"/>
                <RighttHandComponent message="Today is Friday"/>
            </SplitScreenII>

            <SplitScreenIII weights={weights}>
                <LeftHandComponent name="Freddy"/>
                <RighttHandComponent message="Johanna"/>
                <LeftHandComponent name="Ingrid"/>
                <RighttHandComponent message="Vanessa is not here"/>
            </SplitScreenIII>

            <h1>People lists</h1>
            <SplitScreenII leftWeight={2} rightWeight={1}>
                <RegularList
                    items={people}
                    resourceName="person"
                    itemComponent={SmallPersonListItem} />
                <RegularList
                    items={people}
                    resourceName="person"
                    itemComponent={LargePersonListItem} />
            </SplitScreenII>

            <h1>Product lists</h1>
            <SplitScreenII leftWeight={2} rightWeight={1}>
                <RegularList
                    items={products}
                    resourceName="product"
                    itemComponent={SmallProductListItem} />
                <NumberedList
                    items={products}
                    resourceName="product"
                    itemComponent={LargeProductListItem} />
            </SplitScreenII>
        </>
    )   // the 2nd SplitScreen version is more developer-friendly, i.g. with params
}

export default LayoutComponents
