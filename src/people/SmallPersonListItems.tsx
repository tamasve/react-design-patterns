import {Person} from '../people'

export const SmallPersonListItem = ({person}: {person: Person}) => {

    const {name, age} = person;

    return (
        <p>Name: {name} | Age: {age}</p>
    )
}