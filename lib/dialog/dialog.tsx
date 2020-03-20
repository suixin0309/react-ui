import * as React from 'react';
import '../index.scss';
import './dialog.scss';
import { ReactElement, ReactNode} from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '../icon/icon';
import {scopedClassMaker} from '../helpers/classnames';

interface Props {
    visible: boolean;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
}

const scopedClass = scopedClassMaker('sui-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e);
        }
    };
    const x =
        props.visible ?
            <div>
                <div className={sc('mask')} onClick={onClickMask}></div>
                <div className={sc('')}>
                    <header className={sc('header')}>提示</header>
                    <div className={sc('close')} onClick={onClickClose}>
                        <Icon name='close'/>
                    </div>
                    <main className={sc('main')}>
                        {props.children}
                    </main>
                    <footer className={sc('footer')}>
                        {props.buttons && props.buttons.map((button, index) => React.cloneElement(button, {key: index}))}
                    </footer>
                </div>
            </div> :
            <div></div>;
    return (
        ReactDOM.createPortal(x, document.body)
    );
};
Dialog.defaultProps = {
    closeOnClickMask: false
};
const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(compontent, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();

    };
    const compontent = <Dialog visible={true} buttons={buttons} onClose={() => {
        close();
        afterClose && afterClose();
    }}>{content}</Dialog>;
    const div = document.createElement('div');
    ReactDOM.render(compontent, div);
    return close;
};
const alert = (content: string) => {
    const button = [<button onClick={() => close()}>ok</button>];
    const close = modal(content, button);
};
const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        close();
        yes && yes();
    };
    const onNo = () => {
        close();
        no && no();
    };
    const buttons = [
        <button onClick={onNo}>no</button>,
        <button onClick={onYes}>yes</button>
    ];
    const close = modal(content, buttons, no);
};
// const tooltip = (content: string, yes?: () => void, no?: () => void) => {
//     modal(content);
//     // setTimeout(function(){
//     //     close;
//     // },3000)
// };
const tooltip = (content: ReactNode, time: Number=3000) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(compontent), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();

    };
    // const compontent = <div>{content}</div>;
    
    const compontent = <div>
    <div className={sc('mask')}></div>
    <div className={sc('')}>
        <main className={sc('main')}>
            {content}
        </main>
    </div>
</div>;
    const div = document.createElement('div');
    const tooltipdom=ReactDOM.createPortal(compontent, document.body)
    ReactDOM.render(tooltipdom, div);
    setTimeout(function(){
        close()
    },1000)
    // clearTimeout(timerId)
    // return compontent;
};
export {alert, confirm, modal, tooltip};
export default Dialog;
;