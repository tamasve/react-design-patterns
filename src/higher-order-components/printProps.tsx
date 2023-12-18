// gain the props from a component and print them

export const printProps = (Component) => {
    return (props) => {
        console.log(props);
        return <Component {...props} />
    }
}