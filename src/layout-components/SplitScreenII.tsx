import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div<{$weight: number}>`
    flex: ${props => props.$weight};
`;

export const SplitScreenII = ({
    children,
    leftWeight = 1,
    rightWeight = 1
}) => {

const [left, right] = children;

    return (
        <Container>
            <Pane $weight={leftWeight}>
                {left}
            </Pane>
            <Pane $weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    );
}

// here no parameter handling is necessary...