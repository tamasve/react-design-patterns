const isObject = (x: object | string | null) => typeof x === 'object' && x !== null;

export const RecursiveComponent = ({data}: {data: object | string}) => {

    // stopping case (base case)
    if (!isObject(data)) {
        console.log(`not object: ${data}`);
        return (
            <li>{data}</li>
            )
        }
    
    // recursive case
    return (
        <>
            {Object.entries(data).map(([key, value]) => (
                <li>
                    {key}:
                    <ul>
                        <RecursiveComponent data={value} />
                    </ul>
                </li>
            ))}
        </>
    );
}