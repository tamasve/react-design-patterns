import { SplitScreen } from "./SplitScreen";
import { SplitScreenII } from "./SplitScreenII";
import { RegularList } from "./RegularList";
import { people } from "./people";
import { SmallPersonListItem } from './people/SmallPersonListItems';
import { LargePersonListItem } from './people/LargePersonListItems';


const LeftHandComponent = ({name}: {name: string}) => {
    return <h2 style={{backgroundColor: 'lightgreen'}}>{name}</h2>
}

const RighttHandComponent = ({message}: {message: string}) => {
    return <p style={{backgroundColor: 'pink'}}>{message}</p>
}

// 1st: 2 components as params
// 2nd: 2 components as children

function LayoutComponents() {

    return (
        <>
            <h1>SplitScreen</h1>
            <SplitScreen
                left={LeftHandComponent}
                right={RighttHandComponent}
                leftWeight={2}
                rightWeight={5}
                leftProp="John"
                rightProp="Today is Friday"/>

            <SplitScreenII leftWeight={2} rightWeight={5}>
                <LeftHandComponent name="John"/>
                <RighttHandComponent message="Today is Friday"/>
            </SplitScreenII>

            <h1>Lists</h1>

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
        </>
    )   // the 2nd SplitScreen version is more developer-friendly, i.g. with params
}

export default LayoutComponents
