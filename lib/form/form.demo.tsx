import * as React from 'react';
import './form.example.scss'

import Demo from '../../demo';
import FormExample from './form.example';

const FormDemo: React.FunctionComponent = () => {
    return (
        <div className='demo'>
            <h2>Form表单  API</h2>
            <pre>Form React组件的Api文档，具有数据收集校验和提交功能的表单。</pre>
            <h3>API详解</h3>
            <pre>等待自己写好tabel组件，再来见你</pre>
            <h3>代码演示</h3>
            <div>
                <Demo caption='注册新用户' explanation='用户填写必须的信息以注册新用户' code={require('!!raw-loader!./form.example.tsx').default}>
                    <FormExample />
                </Demo>
            </div>

        </div>

    );
};
export default FormDemo;