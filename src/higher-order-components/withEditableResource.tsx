import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';

// withEditableUser HOC - 1 step further, to get it a little bit more generic and usable

// "Ninja JS" :) - used at the bottom...
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);


export const withEditableResource = (Component: FunctionComponent, resourcePath: string, resourceName: string) => {
    
    return props => {

        const [originalData, setOriginalData] = useState<object>({});
        const [data, setData] = useState<object>({});
        
        useEffect(() => {
            (async () => {
                const response = await axios.get(resourcePath);
                setOriginalData(response.data);
                setData(response.data);
            })();
        }, []);

        // function for changing some props in data
        const onChange = (changes: object) => {
            setData({...data, ...changes});
        }

        // function for triggering data save
        const onSave = async () => {
            const response = await axios.post(resourcePath, {[resourceName]: data});
            setOriginalData(response.data);
            setData(response.data);
        }

        // function for reseting user to the original one (loaded from the server)
        const onReset = () => {
            setData(originalData);
        }

        // "Ninja JS" :) to make different prop names for diff.resources (so that they do not clash in case of nesting...)
        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalize(resourceName)}`]: onChange,
            [`onSave${capitalize(resourceName)}`]: onSave,
            [`onReset${capitalize(resourceName)}`]: onReset
        }

        return <Component
                    {...props}
                    {...resourceProps}
                    // user={user}
                    // onChange={onChange}
                    // onSave={onSave}
                    // onReset={onReset}
                />
    }
}