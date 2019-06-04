import * as React from 'react'
import {alert,confirm} from './dialog';

function DialogExample3() {
    return(
        <div>
            <div>
                <button onClick={()=>alert('alert example 3')}>Dialog alert</button>
                <button onClick={()=>confirm('confirm example 3',()=>{
                    console.log("你点击了yes")
                },()=>{
                    console.log("你点击了no")
                })}>Dialog confirm</button>
            </div>
        </div>
    )
}
export default DialogExample3