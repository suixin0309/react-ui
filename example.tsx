import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';

import ButtonDemo from './lib/button/button.demo';
import DialogDemo from './lib/dialog/dialog.demo';
import LayoutDemo from './lib/layout/layout.demo';
import {Layout, Header, Aside, Content, Footer} from './lib/layout/layout';
import './example.scss'
import IconDemo from './lib/icon/icon.demo';
import FormExample from './lib/form/form.demo';
import ScrollExample from './lib/scroll/scroll.example';
import TableExample from './lib/table/table.demo';

// const x=require('!!raw-loader!./lib/icon/icon.example.tsx')
// console.log(x.default)
const logo=require('./logo.png')
ReactDOM.render(
    <Router>
        <Layout className='site-page'>
            <Header className='site-header'>
                <div className='site-logo'>
                    <img src={logo} alt=""/>
                    <span>SUI</span>
                </div>
            </Header>
            <Layout>
                <Aside className='site-aside'>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink to='/icon'>Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to='/button'>button</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dialog'>dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/layout'>layout</NavLink>
                        </li>
                        <li>
                            <NavLink to='/form'>表单</NavLink>
                        </li>
                        <li>
                            <NavLink to='/scroll'>滚动条</NavLink>
                        </li>
                        <li>
                            <NavLink to='/table'>table</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className='site-main'>
                    <main>
                        <Route path='/icon' component={IconDemo}></Route>
                        <Route path='/button' component={ButtonDemo}></Route>
                        <Route path='/dialog' component={DialogDemo}></Route>
                        <Route path='/layout' component={LayoutDemo}></Route>
                        <Route path='/form' component={FormExample}></Route>
                        <Route path='/scroll' component={ScrollExample}></Route>
                        <Route path='/table' component={TableExample}></Route>
                    </main>
                </Content>

            </Layout>
            <Footer className='site-footer'>
                &cope;SuiXin
            </Footer>
        </Layout>
    </Router>
    , document.querySelector('#root'));