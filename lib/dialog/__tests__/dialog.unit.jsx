import * as React from 'react'
import * as renderer from "react-test-renderer";
import Dialog from "../dialog";
import {mount} from 'enzyme'
import * as ReactDOM from "react-dom";


describe('dialog test', () => {
 // beforeAll(() => {
 //    ReactDOM.createPortal = jest.fn((element, node) => {
 //      return element
 //    })
 //  })
 //
 //  afterEach(() => {
 //    ReactDOM.createPortal.mockClear()
 //  })
 //  it('render successfully', () => {
 //    const onClose =jest.fn()
 //    const json = renderer.create(<Dialog onClose={()=>{}} visible='true'/>).toJSON();
 //    expect(json).toMatchSnapshot()
 //  })
  it('click', function () {
    let a=1
    const onClose =jest.fn()
    const visible = true
    const json = mount(<Dialog closeOnClickMask='true' onClose={onClose} visible={visible}/>);
    const mask=json.find(".sui-dialog-mask")
    mask.simulate('click')
    expect(json.find(".sui-dialog-mask").length).toEqual(1)
    // expect(onClose).toHaveBeenCalledTimes(1)
  });
})