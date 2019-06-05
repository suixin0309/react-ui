import * as React from 'react';
import Demo from '../../demo';
import DialogExample1 from './dialog.example.1';
import DialogExample3 from './dialog.example.3';
import DialogExample2 from './dialog.example.2';
import DialogExample4 from './dialog.example.4';

import './dialog.example.scss'
function DialogDemo() {
    return (
        <div className='demo'>
            <h2>弹出框组件 API</h2>
            <pre>弹出框组件的Api文档，具有默认弹出，原生alert,comfirm弹出，自定义模态框等弹出功能。</pre>
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
                    <td>visible</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>--</td>
                    <td>控制组件的显示</td>
                </tr>
                    <tr>
                        <td>buttons</td>
                        <td>
                            <pre>Array(ReactElement)</pre>
                        </td>
                        <td>false</td>
                        <td>&nbsp;</td>
                        <td>自定义的button元素</td>
                    </tr>
                    <tr>
                        <td>onClose</td>
                        <td>React.MouseEventHandler</td>
                        <td>true</td>
                        <td>--</td>
                        <td>关闭弹出的点击事件</td>
                    </tr>
                    <tr>
                        <td>closeOnClickMask</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>false</td>
                        <td>点击遮罩时,组件是否可见</td>
                    </tr>
                </tbody>
            </table>
            <h3>代码演示</h3>

            <div>
                <Demo caption='默认弹出1' code={require('!!raw-loader!./dialog.example.1.tsx').default}>
                    <DialogExample1/>
                </Demo>
            </div>
            <div>
                <Demo caption='默认弹出2' code={require('!!raw-loader!./dialog.example.2.tsx').default}>
                    <DialogExample2/>
                </Demo>
            </div>
            <div>
                <Demo caption='原生弹出' code={require('!!raw-loader!./dialog.example.3.tsx').default}>
                    <DialogExample3/>
                </Demo>
            </div>
            <div>
                <Demo caption='自定义模态框' explanation='默认弹出框'
                      code={require('!!raw-loader!./dialog.example.4.tsx').default}>
                    <DialogExample4/>
                </Demo>
            </div>

        </div>
    );
}

export default DialogDemo;