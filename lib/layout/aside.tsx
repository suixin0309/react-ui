import * as React from 'react';
import './layout.scss'
import classes, {scopedClassMaker} from '../helpers/classnames';
const sc=scopedClassMaker('sui-layout')

interface Props extends React.HTMLAttributes<HTMLElement>{
}

const Aside: React.FunctionComponent<Props> = (props) => {
    const {className,...rest}=props
    return (
        <div className={classes(sc('aside'),className)} {...rest}>
            {props.children}
        </div>
    );
};

export default Aside;