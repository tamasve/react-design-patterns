/**
 * Uncontrolled components
 * keep track of their own states (with own useState Hook) and release data only when some event occurs
 * 
 * Controlled components
 * do not keep track of their own state, all state is passed in as props (that is, when we use the useState Hook with text inputs)
 * - so the parent is the one that takes care of keeping track of their state
 * 
 * the second is preferred:
 * - reusable
 * - more testable
 * 
 */

import ControlledForm from "./uncontrolled-controlled-components/ControlledForm";
import { ControlledModal } from "./uncontrolled-controlled-components/ControlledModal";
import { UncontrolledForm } from "./uncontrolled-controlled-components/UncontrolledForm";
import { useState } from "react";
import { UncontrolledOnboardingFlow } from "./uncontrolled-controlled-components/UncontrolledOnboardingFlow";


// Uncontrolled onboarding flow steps:

const StepOne = ({ goToNext }) => (
    <>
        <h1>Step 1</h1>
        <button onClick={goToNext}>Next</button>
    </>
);
const StepTwo = ({ goToNext }) => (
    <>
        <h1>Step 2</h1>
        <button onClick={goToNext}>Next</button>
    </>
);
const StepThree = ({ goToNext }) => (
    <>
        <h1>Step 3</h1>
        <button onClick={goToNext}>Next</button>
    </>
);

export default function UncontrolledControlledComp () {

    const [shouldShowModal, setShouldShowModal] = useState(false);

    return (
        <>
            <ControlledModal 
                shouldShow={shouldShowModal}
                onRequestClose={() => setShouldShowModal(false)}>
                <h2>Hello Everyone!</h2>
            </ControlledModal>
            <button onClick={() => setShouldShowModal(!shouldShowModal)}>
                {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
            </button>

            <UncontrolledForm />
            <br /><br />
            <ControlledForm />

            <UncontrolledOnboardingFlow>
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledOnboardingFlow>
        </>
    )

}

