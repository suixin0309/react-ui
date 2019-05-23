import * as React from 'react';
import '../index.scss';
import './dialog.scss';
import {Fragment, ReactElement, ReactNode} from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '../icon/icon';
import {scopedClassMaker} from '../classes';

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
            <Fragment>
                <div className={sc('mask')} onClick={onClickMask}></div>
                <div className={sc()}>
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
            </Fragment> :
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
// const modal = (content: ReactNode | ReactFragment) => {
//     return modal(content)
// };
export {alert, confirm, modal};
export default Dialog;
;