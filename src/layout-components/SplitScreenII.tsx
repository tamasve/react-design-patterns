import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div<{$weight: number}>`
    flex: ${props => props.$weight};
`;

// it is more flexible if we handle the panels as children of this layout component

export const SplitScreenII = ({
    children,
    leftWeight = 1,
    rightWeight = 1
}: {
    children: ReactNode[],
    leftWeight: number,
    rightWeight: number
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