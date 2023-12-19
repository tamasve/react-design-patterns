/**
 * load data and give it a component using HOC
 * Separate data loading from the component which uses it
 */

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Person } from "../UncontrolledControlledComp";


export const withUser = (Component: (props: Person) => React.ReactNode, userId: string) => {

    return (props: {name: string, age: number, hairColor: string}) => {
        const [user, setUser] = useState<object>({});

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
            })();
        }, []);

        return <Component {...props} user={user} />
    }
}