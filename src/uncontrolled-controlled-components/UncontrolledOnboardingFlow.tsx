import React, { useState } from 'react';

// onFinish prop: it gets called when the flow completes: it's gone through all children

export const UncontrolledOnboardingFlow = ({children, onFinish}) => {
    
    // the data object
    const [onboardingData, setOnboardingData] = useState({});
    // the index of the child that is gonna be shown
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentChild = React.Children.toArray(children)[currentIndex];

    const goToNext = () => {
        setCurrentIndex(currentIndex + 1);
    }

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {goToNext});
    }

    return currentChild;

}