import * as React from 'react';
import Demo from '../../demo';
import TableExample1 from './table.example.1';

import './table.example.scss'
import Table from './table';

const testList:Array<{name: string, type: string, Required:boolean,default:string,Description:string}>=[
    {name:'visible',type:'boolean',Required:true,default:'--',Description:'控制组件的显示'},
    {name:'buttons',type:'Array(ReactElement)',Required:false,default:'--',Description:'自定义的button元素'},
    {name:'onClose',type:'React.MouseEventHandler',Required:true,default:'--',Description:'关闭弹出的点击事件'},
    {name:'closeOnClickMask',type:'boolean',Required:false,default:'false',Description:'点击遮罩时,组件是否可见'}
];
const thlist:string[]=Object.keys(testList[0])
function DialogDemo() {
    return (
        <div className='demo'>
            <h2>table组件 API</h2>
            <pre>table 组件</pre>
            <h3>API详解</h3>
            <Table thList={thlist} tbodyList={testList}></Table>
            <h3>代码演示</h3>

            <div>
                <Demo caption='table' code={require('!!raw-loader!./table.example.1.tsx').default}>
                    <TableExample1/>
                </Demo>
            </div>

        </div>
    );
}

export default DialogDemo;