import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div<{$weight: number}>`
    flex: ${props => props.$weight};
`;

export const SplitScreenIII = ({
    children,
    leftWeight = 1
}) => {

    // any number of components! - but how can I hand over the flex weights?
    return (
        <Container>
            {children.map((key, value) => 
                (
                    <Pane key={key} $weight={leftWeight}>
                        {value}
                    </Pane>
                ))}
        </Container>
    );
}

// here no parameter handling is necessary...