import * as React from 'react';
import {HTMLAttributes, useEffect, useRef, useState} from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';
import {UIEventHandler} from 'react';
import {MouseEventHandler} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const Scroll: React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0);
    const [barTop, _setBarTop] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [viewHeight, setViewHeight] = useState(0);
    const barRef = useRef<HTMLDivElement>(null);
    const setBarTop = (number: number) => {
        if (number < 0) {return;}
        const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
        if (number > maxBarTop) {return;}
        _setBarTop(number);
    };

    const onScroll: UIEventHandler = (e) => {
        const scrollTop = e.currentTarget.scrollTop;   //34
        setBarHeight(viewHeight * viewHeight / scrollHeight);
        setBarTop(scrollTop * viewHeight / scrollHeight);
    };
    useEffect(() => {
        setScrollHeight(barRef.current!.scrollHeight);
        setViewHeight(barRef.current!.clientHeight)
        const scrollHeight = barRef.current!.scrollHeight; //400
        const viewHeight = barRef.current!.clientHeight;  //200
        setBarHeight(viewHeight * viewHeight / scrollHeight);

        document.addEventListener('mouseup', onMouseUpBar);
        document.addEventListener('mousemove', onMouseMoveBar);
        document.addEventListener('selectstart',onSelect)
        return () => {
            document.removeEventListener('mouseup', onMouseUpBar);
            document.removeEventListener('mousemove', onMouseMoveBar);
            document.removeEventListener('selectstart', onSelect);
        };
    }, []);
    const draggingRef = useRef(false);
    const fristYRef = useRef(0);
    const fristBarTopRef = useRef(0);
    const onMousedownBar: MouseEventHandler = (e) => {
        draggingRef.current = true;
        fristYRef.current = e.clientY;
        fristBarTopRef.current = barTop;
    };
    const onMouseMoveBar = (e: MouseEvent) => {
        if (draggingRef.current) {
            const delta = e.clientY - fristYRef.current;
            const newBarTop=delta + fristBarTopRef.current;
            setBarTop(newBarTop);
            barRef.current!.scrollTop=newBarTop*scrollHeight/viewHeight
        }
    };

    const onMouseUpBar = () => {
        draggingRef.current = false;
    };

    const onSelect = (e:Event) => {
        if(draggingRef.current){e.preventDefault()}
    };
    return (
        <div className='sui-scroll' {...rest}>
            <div className='sui-scroll-inner' style={{right: -scrollbarWidth()}}
                 onScroll={onScroll}
                 ref={barRef}
            >
                {children}

            </div>
            <div className='sui-scroll-track'>
                <div className='sui-scroll-bar' style={{height: barHeight, transform: `translateY(${barTop}px)`}}
                     onMouseDown={onMousedownBar}
                ></div>
            </div>
        </div>
    );
};
export default Scroll;
