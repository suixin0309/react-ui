import * as React from 'react';
import './layout.scss'
import classes, {scopedClassMaker} from '../helpers/classnames';
const sc=scopedClassMaker('sui-layout')

interface Props extends React.HTMLAttributes<HTMLElement>{
    contnet?: any
}

const Header: React.FunctionComponent<Props> = (props) => {
    const {className,...rest}=props
    return (
        <div className={classes(sc('header'),className)} {...rest}>
            {props.children}
        </div>
    );
};

export default Header;