import * as React from 'react';

interface IconProps {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span className={props.name}>Icon</span>
    );
};
export default Icon;