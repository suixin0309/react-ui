import classes, {scopedClassMaker} from '../classnames'

describe('classes test', () => {
  it('接受一个className', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  });
  it('接受2个className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  });
  it('接受3个className', () => {
    const result = classes('a', 'b', 'c')
    expect(result).toEqual('a b c')
  });
  it('xx', () => {
    const result = classes('a', false)
    expect(result).toEqual('a')
  });

});
describe('scopedClassMaker', () => {
  it('x', () => {
    const result = classes('a', false)
    const sc = scopedClassMaker('sui-layout');
    expect(sc('')).toEqual('sui-layout')
    expect(sc('x')).toEqual('sui-layout-x')
    expect(sc({'':true,'hasAside':true,'z':false},{extra:'active bu n'})).toEqual('sui-layout sui-layout-hasAside active bu n')
  })
})