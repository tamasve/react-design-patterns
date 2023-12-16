import styled from 'styled-components';

const Container = styled.div`
    display: flex;
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
}) => {
    
    return (
        <Container>
            <Pane $weight={leftWeight}>
                <Left name={leftProp}/>
            </Pane>
            <Pane $weight={rightWeight}>
                <Right message={rightProp}/>
            </Pane>
        </Container>
    );
}

// more problematic parameter handover...