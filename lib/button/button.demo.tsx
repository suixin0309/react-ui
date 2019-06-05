import * as React from 'react';
import Demo from '../../demo';
import ButtonExample from './button.example';


const ButtonDemo:React.FunctionComponent=()=> {
    return (
        <div>
            <Demo caption='按钮类型' explanation='按钮有3种类型：主按钮、次按钮、危险按钮。主按钮在同一个操作区域最多出现一次'
                  code={require('!!raw-loader!./button.example.tsx').default}>
                <ButtonExample/>
            </Demo>
        </div>
    );
}

export default ButtonDemo;