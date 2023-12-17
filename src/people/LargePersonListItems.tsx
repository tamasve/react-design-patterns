import {Person} from './people'

export const LargePersonListItem = ({person}: {person: Person}) => {

    const {name, age, hairColor, hobbies} = person;

    return (
        <>
            <h2>{name}</h2>
            <p>Age: {age} years</p>
            <p>Hair color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        
        </>
    )
}