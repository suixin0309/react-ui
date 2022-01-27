import * as React from 'react';
import {HTMLAttributes, useEffect, useRef, useState} from 'react';
import './scroll.scss';
import scrollbarWidth from './scrollbar-width';
import {UIEventHandler} from 'react';
import {MouseEventHandler} from 'react';
import {TouchEventHandler} from 'react';
import classes from '../helpers/classnames';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const isTouchDevice = !('ontouchstart' in document.documentElement);
console.log(isTouchDevice);
const Scroll: React.FunctionComponent<Props> = (props) => {
    const {children, ...rest} = props;
    const [barHeight, setBarHeight] = useState(0);
    const [barVisible,setBarVisible] = useState(false);
    const [barTop, _setBarTop] = useState(0);
    // const [scrollHeight, setScrollHeight] = useState(0);
    // const [viewHeight, setViewHeight] = useState(0);
    const barRef = useRef<HTMLDivElement>(null);
    const setBarTop = (number: number) => {
        if (number < 0) {return;}
        const viewHeight=barRef.current!.getBoundingClientRect().height;
        const scrollHeight=barRef.current!.scrollHeight;
        const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
        if (number > maxBarTop) {return;}
        _setBarTop(number);
    };
    let timerIdRef=useRef<number|null>(null)
    const onScroll: UIEventHandler = (e) => {
        setBarVisible(true)
        const viewHeight=barRef.current!.getBoundingClientRect().height;
        const scrollHeight=barRef.current!.scrollHeight;
        const scrollTop = e.currentTarget.scrollTop;   //34
        setBarHeight(viewHeight * viewHeight / scrollHeight);
        setBarTop(scrollTop * viewHeight / scrollHeight);
        if(timerIdRef!=null){
            clearTimeout(timerIdRef.current!)
        }
        timerIdRef.current=window.setTimeout(() => {
            setBarVisible(false)
        }, 500);
    };
    useEffect(()=>{
        console.log(barVisible);
    },[barVisible])
    useEffect(() => {
        // setScrollHeight(barRef.current!.scrollHeight);
        // setViewHeight(barRef.current!.clientHeight);
        const scrollHeight = barRef.current!.scrollHeight; //400
        const viewHeight = barRef.current!.clientHeight;  //200
        setBarHeight(viewHeight * viewHeight / scrollHeight);

        document.addEventListener('mouseup', onMouseUpBar);
        document.addEventListener('mousemove', onMouseMoveBar);
        document.addEventListener('selectstart', onSelect);
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
        console.log(1212);
    };
    const onMouseMoveBar = (e: MouseEvent) => {
        if (draggingRef.current) {
            const delta = e.clientY - fristYRef.current;
            const newBarTop = delta + fristBarTopRef.current;
            setBarTop(newBarTop);
            // setTouchTranslate(newBarTop * scrollHeight / viewHeight)
            const vv=barRef.current!.getBoundingClientRect().height;
            const ss=barRef.current!.scrollHeight;
            // barRef.current!.scrollTop = newBarTop * scrollHeight / viewHeight;
            barRef.current!.scrollTop = newBarTop * ss / vv;
        }
    };
    const onMouseUpBar = () => {
        console.log(barRef.current!.scrollTop);
        draggingRef.current = false;
    };
    const onSelect = (e: Event) => {
        if (draggingRef.current) {e.preventDefault();}
    };
    const [touchTranslate, _setTouchTranslate] = useState(0);
    const setTouchTranslate = (y: number) => {
        if (y < 0) y = 0;
        else if (y > 50) y = 50;
        _setTouchTranslate(y);
    };
    const pullingRef = useRef(false);
    const lastYRef = useRef(0);
    const moveCountRef = useRef(0);
    const onTouchStart: TouchEventHandler = (e) => {
        const scrollTop = barRef.current!.scrollTop;
        if (scrollTop !== 0) {return;}
        pullingRef.current = true;
        lastYRef.current = e.touches[0].clientY;
        moveCountRef.current = 0;
    };
    const onTouchMove: TouchEventHandler = (e) => {
        const deltaY = e.touches[0].clientY - lastYRef.current;
        moveCountRef.current +=1;
        if (moveCountRef.current === 1 && deltaY < 0) {
            pullingRef.current = false;
            return;
        }
        if (!pullingRef.current) {return;}

        setTouchTranslate(touchTranslate + deltaY);
        lastYRef.current=e.touches[0].clientY;

    };
    const onTouchEnd: TouchEventHandler = (e) => {

        setTouchTranslate(0)
    };

    return (
        <div className='sui-scroll' {...rest}>
            <div className='sui-scroll-inner'
                 style={{
                     right: -scrollbarWidth(),
                     transform: `translateY(${touchTranslate}px)`,
                 }}
                 onScroll={onScroll}
                 onTouchStart={onTouchStart}
                 onTouchMove={onTouchMove}
                 onTouchEnd={onTouchEnd}
                 ref={barRef}
            >
                {children}

            </div>
            <div className={classes('sui-scroll-track',`${barVisible?'':'sui-scroll-fadeout'}`)}>
              <div className='sui-scroll-bar'
               style={{height: barHeight, transform: `translateY(${barTop}px)`}}
                   onMouseDown={onMousedownBar}
              ></div>
            </div>

        </div>
    );
};
export default Scroll;
