import * as React from 'react';
import './layout.scss'
import classes, {scopedClassMaker} from '../helpers/classnames';
const sc=scopedClassMaker('sui-layout')

interface Props extends React.HTMLAttributes<HTMLElement>{
    contnet?: any
}

const Content: React.FunctionComponent<Props> = (props) => {
    const {className,...rest}=props
    return (
        <div className={classes(sc('content'),className)} {...rest}>
            {props.children}
        </div>
    );
};

export default Content;