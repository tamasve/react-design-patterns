import React, { useRef } from "react";

export const UncontrolledForm = () => {

    const nameInput = useRef<HTMLInputElement>(null);
    const ageInput = useRef<HTMLInputElement>(null);
    const hairColorInput = useRef<HTMLInputElement>(null);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(nameInput.current?.value);
        console.log(ageInput.current?.value);
        console.log(hairColorInput.current?.value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Uncontrolled form</h2>
            <input name="name" type="text" placeholder="Name" ref={nameInput} />
            <input name="age" type="text" placeholder="Age" ref={ageInput} />
            <input name="hairColor" type="text" placeholder="Hair color" ref={hairColorInput} />
            <input type="submit" value="Submit" />
        </form>
    )

}