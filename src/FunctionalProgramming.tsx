import { GreenButton, RedButton } from "./functional-programming/Composition";
import { RecursiveComponent } from "./functional-programming/RecursiveComponent"

const nestedObject: object = {
    a: 1,
    b: {
        b1: 4,
        b2: {
            b23: 'Hello'
        },
        b3: {
            b31: {
                message: 'Hi'
            },
            b32: {
                message: 'Hi everyone'
            }
        }
    },
    c: {
        c1: 2,
        c2: 3
    }
}

export default function FunctionalProgramming () {
    return (
        <>
            <RecursiveComponent data={nestedObject} />
            <RedButton text="Composition from Button" />
            <GreenButton text="Partially applied Button" />
        </>
    );
}