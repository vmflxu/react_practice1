const Button = ({ add, children }) => {
    return <button onClick={add}>{children}</button>;
}


export default Button;