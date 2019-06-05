import * as React from 'react';
import IconExample from './icon.example';
import Demo from '../../demo';
const IconDemo= ()=>{
    return(
        <div className='demo'>
            <h2>Icon 图标</h2>
            <h3>API详解</h3>
            <table className='demo-api'>
                <thead>
                <tr>
                    <th>name</th>
                    <th>type</th>
                    <th>Required</th>
                    <th>default</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>name</td>
                    <td>string</td>
                    <td>true</td>
                    <td>--</td>
                    <td>icon的名字</td>
                </tr>
                </tbody>
            </table>
            <h3>图标演示</h3>
            <div>
                <Demo caption='Icon' explanation='所有图标为svg格式' code={require('!!raw-loader!./icon.example.tsx').default}>
                    <IconExample />
                </Demo>
            </div>
        </div>
    )
}
export  default IconDemo