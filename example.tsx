import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';

import ButtonExample from './lib/button/button.example';
import App from './lib/appp';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Aside, Content, Footer} from './lib/layout/layout';
import './example.scss'
import IconDemo from './lib/icon/icon.demo';
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
                            <NavLink to='/app'>app</NavLink>
                        </li>
                        <li>
                            <NavLink to='/layout'>layout</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className='site-main'>
                    <main>
                        <Route path='/icon' component={IconDemo}></Route>
                        <Route path='/button' component={ButtonExample}></Route>
                        <Route path='/dialog' component={DialogExample}></Route>
                        <Route path='/layout' component={LayoutExample}></Route>
                        <Route path='/app' component={App}></Route>
                    </main>
                </Content>

            </Layout>
            <Footer className='site-footer'>
                &cope;SuiXin
            </Footer>
        </Layout>
    </Router>
    , document.querySelector('#root'));