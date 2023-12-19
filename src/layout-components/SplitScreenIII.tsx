import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div<{$weight: number}>`
    flex: ${props => props.$weight};
`;

// it is more flexible if we handle the panels as children of this layout component
export const SplitScreenIII = ({
    children,
    weights
}: {
    children: ReactNode[],
    weights: number[]
}) => {

    // any number of components! - but how can I hand over the flex weights?
    return (
        <Container>
            {children.map((key, value) => 
                (
                    <Pane key={value} $weight={weights[value]}>
                        {key}
                    </Pane>
                ))}
        </Container>
    );
}
