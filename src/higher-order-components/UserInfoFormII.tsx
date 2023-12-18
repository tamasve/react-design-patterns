import { withEditableResource } from "./withEditableResource";

// the wrapped component is given entirely here not in a separate file

export const UserInfoFormII = withEditableResource(
    
({user, onChangeUser, onSaveUser, onResetUser}) => {
    const {name, age, hairColor} = user || {};

    return user ? (
        <>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => onChangeUser({name: e.target.value})} />
            </label>
            <label>
                Age:
                <input type="number" value={age} onChange={(e) => onChangeUser({age: Number(e.target.value)})} />
            </label>
            <label>
                Hair color:
                <input type="text" value={hairColor} onChange={(e) => onChangeUser({hairColor: e.target.value})} />
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save</button>
        </>
    ) : <p>...Loading</p>
}, "/users/234", "user");