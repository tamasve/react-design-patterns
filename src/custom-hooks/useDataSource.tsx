/**
 * the most flexible version for a data loader Hook (i.g. from a server)
 */

import { useState, useEffect } from 'react';

export const useDataSource = (getResourceFunc: () => object | string | null) => {

    const [resource, setResource] = useState<object | string | null>(null);

    useEffect(() => {
        (async () => {
            const result = await getResourceFunc();
            setResource(result);
        })
    }, [getResourceFunc]);

    return resource;
}