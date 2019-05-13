import classes from '../classnames'
describe('classes test', () => {
    it('接受一个className', () => {
        const result=classes('a')
        expect(result).toEqual('a')
    });
    it('接受2个className', () => {
        const result=classes('a','b')
        expect(result).toEqual('a b')
    });
    it('接受3个className', () => {
        const result=classes('a','b','c')
        expect(result).toEqual('a b c')
    });
    it('xx', () => {
        const result=classes('a',false)
        expect(result).toEqual('a')
    });

});