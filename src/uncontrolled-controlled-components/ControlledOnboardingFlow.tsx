import React from 'react';
import { Step } from '../UncontrolledControlledComp';

// onFinish prop: it gets called when the flow completes: it's gone through all children

export const ControlledOnboardingFlow = 
    ({children, currentIndex, onNext}: 
        {children: React.ReactNode[], currentIndex: number, onNext: (data: object) => void}) => {
    
    // // the data object
    // const [onboardingData, setOnboardingData] = useState({});
    // // the index of the child that is gonna be shown
    // const [currentIndex, setCurrentIndex] = useState(0);

    const currentChild = React.Children.toArray(children)[currentIndex];

    // // -- THE ACTIVE FUNCTION IN EACH STEPS --

    const goToNext = (stepData: object) => {
        onNext(stepData);

    //     const nextIndex = currentIndex + 1;
    //     // combine the 2 objects
    //     const updatedData = {
    //         ...onboardingData,
    //         ...stepData
    //     };
    //     // show actual object on Console
    //     console.log(updatedData);
    //     // increment index / finish
    //     if (nextIndex < children.length) {
    //         setCurrentIndex(nextIndex);
    //     } else {
    //         onFinish(updatedData);
    //     }

    //     setOnboardingData(updatedData);
    }
    // ----

    if (React.isValidElement(currentChild)) {
        return React.cloneElement<React.ReactElement<Step>>(currentChild, {goToNext});
    }

    return currentChild;

}