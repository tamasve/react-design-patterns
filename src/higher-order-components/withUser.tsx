/**
 * load data and give it a component using HOC
 * Separate data loading from the component which uses it
 */

import React, { useState, useEffect, FunctionComponent } from "react";
import axios from 'axios';

export const withUser = (Component: FunctionComponent, userId: string) => {

    return props => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
            })();
        }, []);

        return <Component {...props} user={user} />
    }
}