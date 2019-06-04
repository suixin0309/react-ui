import * as React from 'react'
import {modal} from './dialog';

function DialogExample4() {
    const openModal=()=>{
        const close=modal(<h1>Modal <button onClick={()=>close()}>取消</button></h1>)
    }
    return(
        <div>
            <div>
                <button onClick={()=>openModal()}>Dialog modal</button>
            </div>
        </div>
    )
}
export default DialogExample4