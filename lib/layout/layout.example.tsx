import * as React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './layout.scss';
import './layout.example.scss';
import Aside from './aside';

const LayoutExample: React.FunctionComponent = () => {
    return (
        <div>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{height: 200,width:480}}>
                    <Header className='x'>Header</Header>
                    <Content className='y'>Contnet</Content>
                    <Footer className='x'>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout style={{height: 200,width:480}}>
                    <Header className='x'>Header</Header>
                    <Layout>
                        <Aside className='z'>aside</Aside>
                        <Content className='y'>Contnet</Content>
                    </Layout>
                    <Footer className='x'>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第三个例子</h1>
                <Layout style={{height: 200,width:480}}>
                    <Header className='x'>Header</Header>
                    <Layout>
                        <Content className='y'>Contnet</Content>
                        <Aside className='z'>aside</Aside>
                    </Layout>
                    <Footer className='x'>Footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第四个例子</h1>
                <Layout style={{height: 200,width:480}}>
                    <Aside className='z'>aside</Aside>
                    <Layout>
                        <Header className='x'>Header</Header>
                        <Content className='y'>Contnet</Content>
                        <Footer className='x'>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
};

export default LayoutExample;