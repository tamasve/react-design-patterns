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
import { ControlledOnboardingFlow } from "./uncontrolled-controlled-components/ControlledOnboardingFlow";


// Uncontrolled onboarding flow steps:

export type Step = ({ goToNext }: {
    goToNext: (stepData: object) => void;
}) => React.ReactNode | React.ReactNode;


const StepOne: Step = ({ goToNext }) => (
    <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({name: 'John Doe'})}>Next</button>
    </>
);

const StepTwo: Step = ({ goToNext }) => (
    <>
        <h1>Step 2</h1>
        <button onClick={() => goToNext({age: 44})}>Next</button>
    </>
);

// with Controlled onboarding flow we have more control over the flow - i.g. conditional step depending on data that it handles
const StepThree: Step = ({ goToNext }) => (
    <>
        <h1>Step 3</h1>
        <p>Congratulations! You qualify for our senior discount (show it only above 62)</p>
        <button onClick={() => goToNext({})}>Next</button>
    </>
);

const StepFour: Step = ({ goToNext }) => (
    <>
        <h1>Step 4</h1>
        <button onClick={() => goToNext({hairColor: 'brown'})}>Next</button>
    </>
);


export type Person = {
    name: string;
    age: number;
    hairColor: string;
}


export default function UncontrolledControlledComp () {

    const [shouldShowModal, setShouldShowModal] = useState(false);

    // --- For the Controlled onboarding flow ---
    // (2nd version for onboarding flow, see uncontr. version)

    // the data object
    const [onboardingData, setOnboardingData] = useState<Person>({});
    // the index of the child that is gonna be shown
    const [currentIndex, setCurrentIndex] = useState(0);

    // -- THE ACTIVE FUNCTION IN EACH STEPS --

    const onNext = (stepData: object) => {
        const nextIndex = currentIndex + 1;
        // combine the 2 objects
        const updatedData = {
            ...onboardingData,
            ...stepData
        };
        // show actual object on Console
        console.log(updatedData);
        // increment index / finish
        if (updatedData.hairColor) alert("Onboarding complete");    // trigger for end: last attribute has come
        
        setCurrentIndex(nextIndex);
        setOnboardingData(updatedData);
    }
    // ----


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

            <UncontrolledOnboardingFlow
                onFinish={(data: object) => {
                    console.log(data);
                    alert("Onboarding complete"); }}
            >
                <StepOne />
                <StepTwo />
                <StepThree />
                <StepFour />
            </UncontrolledOnboardingFlow>

            <ControlledOnboardingFlow 
                currentIndex={currentIndex}
                onNext={onNext}
            >
                <StepOne />
                <StepTwo />
                {onboardingData.age >= 62 && <StepThree />}
                <StepFour />
            </ControlledOnboardingFlow>
        </>
    )

}

