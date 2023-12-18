import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';

// a more special HOC: not only request the data for the component (a form) but provides all the functionality (data change, save, reset)

export const withEditableUser = (Component: FunctionComponent, userId: string) => {
    
    return (props: {name: string, age: number, hairColor: string}) => {

        const [originalUser, setOriginalUser] = useState<object>({});
        const [user, setUser] = useState<object>({});
        
        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setOriginalUser(response.data);
                setUser(response.data);
            })();
        }, []);

        // function for changing some props in user
        const onChangeUser = (changes: object) => {
            setUser({...user, ...changes});
        }

        // function for triggering user save
        const onSaveUser = async () => {
            const response = await axios.post(`/users/${userId}`, {user});
            setOriginalUser(response.data);
            setUser(response.data);
        }

        // function for reseting user to the original one (loaded from the server)
        const onResetUser = () => {
            setUser(originalUser);
        }

        return <Component
                    {...props}
                    user={user}
                    onChangeUser={onChangeUser}
                    onSaveUser={onSaveUser}
                    onResetUser={onResetUser}
                />
    }
}