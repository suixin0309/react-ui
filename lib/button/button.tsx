import * as React from 'react';
import './button.scss';
import classes from '../helpers/classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    level?: 'important' | 'danger' | 'normal'
}

const Button: React.FunctionComponent<Props> = (props) => {
    const {className, children, level, ...rest} = props;
    return (
        <button className={classes('sui-button', `sui-button-${level}`, className)} {...rest}>
            {props.children}
        </button>
    );
};
Button.defaultProps={
    level:'normal'
}
export default Button;