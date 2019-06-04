import * as React from 'react'
import {useState} from 'react';
import Dialog from './dialog';

function DialogExample1() {
    const [x,setX]=useState(false)
    return(
        <div>
            <div>
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
        </div>
    )
}
export default DialogExample1