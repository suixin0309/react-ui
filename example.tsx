import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router,Route , Link} from 'react-router-dom';

import IconExample from './lib/icon/icon.example'
import ButtonExample from './lib/button/button.example';
import App from './lib/appp';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
ReactDOM.render(
    <Router>
        <div>
            <header>
                <div className='logo'>
                    Sui
                </div>
            </header>

            <div>
                <aside>
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
                </aside>
                <main>
                    <Route path='/icon' component={IconExample}></Route>
                    <Route path='/button' component={ButtonExample}></Route>
                    <Route path='/dialog' component={DialogExample}></Route>
                    <Route path='/layout' component={LayoutExample}></Route>
                    <Route path='/app' component={App}></Route>
                </main>
            </div>
        </div>
    </Router>
    , document.querySelector('#root'));