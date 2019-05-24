import * as React from 'react';
import './layout.scss';
import {scopedClassMaker} from '../helpers/classnames';
import {ReactElement} from 'react';
import Aside from './aside';

const sc = scopedClassMaker('sui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    const childrenAsArray = (props.children as Array<ReactElement>);
    const hasAside = Boolean(childrenAsArray.length &&
        childrenAsArray.reduce((result, node) => {
            return result || node.type === Aside;
        }, false));
    return (
        <div className={sc({'':true,hasAside},{extra:className})} {...rest}>
            {props.children}
        </div>
    );

};
export default Layout;