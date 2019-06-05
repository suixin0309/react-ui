import * as React from 'react';
import Icon from './icon';
import './icon.example.scss'
const IconExample:React.FunctionComponent=()=>{
    return(
        <div className='icon-example'>
            <ul>
                <li>
                    <Icon className='icon' name='alipay' />
                    <div>alipay</div>
                </li>
                <li>
                    <Icon className='icon' name='wechat' />
                    <div>wechat</div>
                </li>
            </ul>
        </div>
    )
}
export default IconExample;