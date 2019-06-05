import * as React from 'react';
import Demo from '../../demo';

import LayoutExample from './layout.example';
function DialogDemo() {
    return (
        <div className='demo'>
            <h2>layout API</h2>
            <pre>布局组件的Api文档，协助进行页面整体布局。</pre>
            <h3>设计规则</h3>
            <div>
                <h5>尺寸</h5>
                <pre>组件本身没有定义宽高。</pre>
            </div>
            <h3>组件概述</h3>
            <div className='demo-overview'>
                <ul>
                    <li>Layout:布局容器，其下可嵌套 Header、Sider、 Content、 Footer 或 Layout 本身，可以放在任何父容器中。</li>
                    <li>Header:顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li>
                    <li>Asider:侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。</li>
                    <li>Content:内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li>
                    <li>Footer:底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</li>
                </ul>
                <span className='demo-note'>注意：组件采用flex布局，请注意浏览器兼容问题。</span>
            </div>
            <h3>代码演示</h3>

            <div>
                <Demo caption='默认弹出1' code={require('!!raw-loader!./layout.example.tsx').default}>
                    <LayoutExample/>
                </Demo>
            </div>
        </div>
    );
}

export default DialogDemo;