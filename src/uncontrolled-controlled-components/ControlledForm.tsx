import { useState, useEffect } from 'react';

export default function ControlledForm () {

    // these useState hooks create a 2-way binding between the value of inputs and the value of the states
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [hairColor, setHairColor] = useState("");

    // no submit button and onSubmit...
    // it allows us to validate the form while the user is typing
    // this is done by useEffect

    const [nameInputError, setNameInputError] = useState("");

    useEffect(() => {
        if (name.length < 5) {
            setNameInputError("Name must be 5 or more characters");
        } else {
            setNameInputError("");
        }
    }, [name])

    return (
        <form>
            <h2>Controlled form</h2>
            {nameInputError && <p>{nameInputError}</p>}
            <input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input name="age" type="text" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
            <input name="hairColor" type="text" placeholder="Hair color" value={hairColor} onChange={e => setHairColor(e.target.value)} />
            <button>Submit</button>
        </form>
    )

}