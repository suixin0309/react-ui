import * as React from 'react';
import './importicons'
import './icon.scss'
import './helpers/classnames'
import classes from './helpers/classnames';
interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className,...restProps}=props
    return (
        <svg className={classes('sui-icon',className)} {...restProps}>
            <use xlinkHref={`#${props.name}`} />
        </svg>

    );
};
export default Icon;