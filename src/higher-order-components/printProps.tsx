// gain the props from a component and print them

export const printProps = (Component: (props: object) => React.ReactNode) => {
    return (props: object) => {
        console.log(props);
        return <Component {...props} />
    }
}