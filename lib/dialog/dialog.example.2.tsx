import * as React from 'react'
import {useState} from 'react';
import Dialog from './dialog';

function DialogExample2() {
    const [y,setY]=useState(false)
    return(
        <div>
            <div>
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
        </div>
    )
}
export default DialogExample2