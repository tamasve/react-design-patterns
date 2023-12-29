import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    // flex-direction: column;
`;

const Pane = styled.div<{$weight: number}>`
    flex: ${props => props.$weight};
`;

export const SplitScreen = ({
    left: Left,
    right: Right,
    leftWeight = 1,
    rightWeight = 1,
    leftProp,
    rightProp
}: {
    left: React.JSX.Element,
    right: React.ReactNode,
    leftWeight: number,
    rightWeight: number,
    leftProp: string,
    rightProp: string
}) => {
    
    return (
        <Container>
            <Pane $weight={leftWeight} style={{backgroundColor: "yellow"}}>
                <Left name={leftProp}/>
            </Pane>
            <Pane $weight={rightWeight} style={{backgroundColor: "lightblue"}}>
                <Right message={rightProp}/>
            </Pane>
        </Container>
    );
}

// more problematic parameter-handover...