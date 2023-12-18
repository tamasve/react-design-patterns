/**
 * HOC never follow the same convetion as regular React components (having a capital initial letter)
 * - they do not return JSX, they return a React component
 */

import { printProps } from "./higher-order-components/printProps";
import { LargePersonListItem } from "./people/LargePersonListItems";
import { UserInfoForm } from "./higher-order-components/UserInfoForm";
// import { withUser } from "./higher-order-components/withUser";

const PersonInfoWrapped = printProps(LargePersonListItem);

// const UserInfoWithLoader = withUser(LargePersonListItem, '234');

export default function HigherOrderComponents () {

    return (
        <>
            {/* <PersonInfoWrapped a={1} b="Hello" c={{name: "Joe"}} /> */}
            {/* <UserInfoWithLoader /> */}
            <UserInfoForm />
        </>
    );
}