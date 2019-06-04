import * as React from 'react';
import {InputHTMLAttributes} from 'react';
import './input.scss';
import {scopedClassMaker} from '../helpers/classnames';

const sc = scopedClassMaker('sui-input');

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <input className={sc('')} {...rest}/>
    );
};
export default Input;