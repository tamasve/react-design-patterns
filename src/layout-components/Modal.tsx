import { ReactNode, useState } from 'react';
import styled from 'styled-components';


const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
    background-color: rgb(238, 238, 178);
    margin: 10% auto;
    padding: 20px;
    width: 50%;
    border-radius: 10px;
    text-align: center;
`;

// This Modal is Uncontrolled... no parent can manipulate it...

export const Modal = ({ caption, children }: { caption: string, children: ReactNode }) => {

    const [shouldShow, setShouldShow] = useState(false);

    return ( 
        <>
            <button onClick={() => setShouldShow(true)}>{caption}</button>
            {shouldShow && (
                <ModalBackground onClick={() => setShouldShow(false)}>
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setShouldShow(false)}>Hide Modal</button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )}
        </>
    );

}