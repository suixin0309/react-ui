import * as React from "react"
import renderer from "react-test-renderer"
import Button from "../lib/button"

describe('button用例', () => {
    it('是div', () => {
        const json=renderer.create(<Button/>).toJSON()
        expect(json).toMatchSnapshot()
    });
});