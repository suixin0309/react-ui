import * as React from "react"
import * as renderer from "react-test-renderer"
import {mount} from 'enzyme'
import Icon from "../icon"

describe('icon用例', () => {
    it('render successfully', () => {
        const json = renderer.create(<Icon name='alipay'/>).toJSON()
        expect(json).toMatchSnapshot()
    });
    it('onClick', function () {
        const fn=jest.fn()
        const fn2=jest.fn()   //
        const compontent =mount(<Icon name='alipay' onClick={fn}/>)
        compontent.find('svg').simulate('click')
        expect(fn).toBeCalled()
        // expect(fn2).toBeCalled()   错误样例


    });
});