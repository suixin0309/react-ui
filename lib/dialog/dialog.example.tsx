import * as React from 'react'
import {useState} from 'react';
import Dialog,{alert,confirm,modal,tooltip} from './dialog';

function DialogExample() {
    const [x,setX]=useState(false)
    const [y,setY]=useState(false)
    const openModal=()=>{
        modal(<h1>Modal <button onClick={()=>close()}>取消</button></h1>)
    }
    const openTooltip=()=>{
        tooltip(<h1>tooltip </h1>)
    }
    return(
        <div>
            <div>
                <h2>Example 1</h2>

                <button onClick={()=>setX(!x)}>Dialog</button>
                <Dialog visible={x} buttons={
                    [
                        <button onClick={()=>setX(false)}>取消</button>,
                        <button onClick={()=>setX(false)}>确定</button>
                    ]
                } onClose={()=>setX(false)} closeOnClickMask={false}>
                    <div>hi dialog!</div>
                </Dialog>
            </div>
            <div>
                <h2>Example 2</h2>
                <button onClick={()=>setY(!y)}>Dialog</button>
                <Dialog visible={y} buttons={
                    [
                        <button onClick={()=>setY(false)}>取消</button>,
                        <button onClick={()=>setY(false)}>确定</button>
                    ]
                } onClose={()=>setY(false)} closeOnClickMask={true}>
                    <div>hi dialog!</div>
                </Dialog>
            </div>
            <div>
                <h2>Example 3</h2>
                <button onClick={()=>alert('alert example 3')}>Dialog alert</button>
                <button onClick={()=>confirm('confirm example 3',()=>{
                    console.log("你点击了yes")
                },()=>{
                    console.log("你点击了no")
                })}>Dialog confirm</button>
            </div>
            <div>
                <h2>Example 4 </h2>
                <button onClick={()=>openModal()}>Dialog modal</button>
            </div>
            <div>
                <h2>Example 5 </h2>
                <button onClick={()=>openTooltip()}>tooltip</button>
            </div>
        </div>
    )
}
export default DialogExample