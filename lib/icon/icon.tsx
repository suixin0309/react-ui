import * as React from 'react';
import './importicons.js';
import './icon.scss';
import classes from '../helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({className, name, ...restProps}) => {
    return (
        <svg className={classes('sui-icon', className)} {...restProps}>
            <use xlinkHref={`#${name}`}/>
        </svg>

    );
};
export default Icon;