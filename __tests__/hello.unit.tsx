function add(a:number,b:number){
    return a+b
}
describe('我的第一个测试用例', () => {
    it('1==2', () => {
        expect(add(2,3)).toEqual(5);
    });
});