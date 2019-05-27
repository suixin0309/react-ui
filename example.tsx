import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button/button.example';
import App from './lib/appp';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Header, Aside, Content, Footer} from './lib/layout/layout';
import './example.scss'
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
                            <Link to='/icon'>Icon</Link>
                        </li>
                        <li>
                            <Link to='/button'>button</Link>
                        </li>
                        <li>
                            <Link to='/dialog'>dialog</Link>
                        </li>
                        <li>
                            <Link to='/app'>app</Link>
                        </li>
                        <li>
                            <Link to='/layout'>layout</Link>
                        </li>
                    </ul>
                </Aside>
                <Content className='site-main'>
                    <main>
                        <Route path='/icon' component={IconExample}></Route>
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