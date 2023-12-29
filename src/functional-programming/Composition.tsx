// This Button component will be composed into new components
export const Button = ({size, bcolor, text, ...props}: {size?: string, bcolor?: string, text?: string, props: object}) => {
    return (
        <button style={{
            padding: size === 'large' ? '32px' : '8px',
            fontSize: size === 'large' ? '32px' : '16px',
            backgroundColor: bcolor,
            ...props
        }} {...props}
        >{text}</button>
    )       // inner ...props: other style attributes (non-listed among params)
            // outer ...props: other non-style attributes
            // which to choose? in some cases both (this code) will work (JS will reject those that does not work)
}

// -- composition --
export const RedButton = (props: object) => {
    return (
        <Button {...props} bcolor="red" />
    )
}

// -- partially applied component --
// HOC for this feature
export const partiallyApply = (Component: (props: object) => React.ReactNode, partialProps: object) => {
    return (props: object) => {
        return <Component {...partialProps} {...props} />
    }
}

export const GreenButton = partiallyApply(Button, {bcolor: 'green'});