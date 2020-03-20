import * as React from 'react'
import {tooltip} from './dialog';

function DialogExample5() {
    const openModal=()=>{
        tooltip(<h1>tooltip</h1>)
    }
    return(
        <div>
            <div>
                <button onClick={()=>openModal()}>tooltip</button>
            </div>
        </div>
    )
}
export default DialogExample5