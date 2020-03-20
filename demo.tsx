import * as React from 'react'
import Highlight,{defaultProps} from 'prism-react-renderer'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {useState} from 'react';
import { tooltip } from './lib/dialog/dialog';
interface Props {
    code:string,
    explanation?:string,
    caption?:string
}

const Demo:React.FunctionComponent<Props> =(props)=>{
    const [codeVisible,setCodeVisible]=useState(false)
    // const [copyValue,setCopyValue]=useState(false)
    function onCopy(){
        console.log('copy')
        tooltip(<p style={{textAlign:"center"}}>复制成功</p>)

    }
    return(
        <div>
            <div className='demo-show'>
                <div className='example'>
                    {props.children}
                </div>
                <div>
                    <div className='demo-comment'>
                        <span className='line'></span>
                        <span className='text'>{props.caption}</span>
                        <span className='line'></span>
                    </div>
                    <div>{props.explanation}</div>
                    <div className='demo-code'>
                        <CopyToClipboard text={props.code} onCopy={onCopy}>
                             <span>复制代码</span>
                        </CopyToClipboard> 
                        {/* <span>复制代码</span> */}
                        <span onClick={()=>setCodeVisible(!codeVisible)}>显示代码</span>
                    </div>
                    <div>
                        {codeVisible?<Highlight {...defaultProps} code={props.code} language='jsx'>
                                {({className,style,tokens,getLineProps,getTokenProps})=>(
                                    <pre className={className} style={style}>
                            {tokens.map((line,i)=>(
                                <div {...getLineProps({line,key:i})}>
                                    {line.map((token,key)=>(
                                        <span {...getTokenProps({token,key})}></span>
                                    ))}
                                </div>
                            ))}
                        </pre>
                                )}
                            </Highlight>:
                            <div></div>}
                    </div>
                </div>
            </div>


        </div>
    )
}
Demo.defaultProps={
    caption:''
}
export default Demo