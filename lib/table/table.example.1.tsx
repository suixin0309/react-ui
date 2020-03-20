import * as React from 'react'
// import {useState} from 'react';
import Table from './table';

const testList:Array<{name: string, type: string, Required:boolean,default:string,Description:string}>=[
    {name:'visible',type:'boolean',Required:true,default:'--',Description:'控制组件的显示'},
    {name:'buttons',type:'Array(ReactElement)',Required:false,default:'--',Description:'自定义的button元素'},
    {name:'onClose',type:'React.MouseEventHandler',Required:true,default:'--',Description:'关闭弹出的点击事件'},
    {name:'closeOnClickMask',type:'boolean',Required:false,default:'false',Description:'点击遮罩时,组件是否可见'}
];
const thlist:string[]=Object.keys(testList[0])

function TableExample1() {
    return(
        <div>
            <div>
                <Table thList={thlist} tbodyList={testList}>
                    <div>hi dialog!</div>
                </Table>
            </div>
        </div>
    )
}
export default TableExample1