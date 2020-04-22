const { add } = require('./calculator.js');

// test away!
describe('calculator.js', ()=>{
    it("should run tests without errors",()=>{
        expect(true).toBeTruthy();
    })

    describe('.add', () => {
        it('should add two numbers', ()=>{
            const sum = add(3,3);

            expect(sum).toBe(6);
        });

        it('should return 0 when called with no arguments',()=>{
            const shouldBeZero = add();
            expect(shouldBeZero).toBe(0);
        });

        it('should return the number when called with a single number',()=>{
            expect(add(3)).toBe(3);
            expect(add(-5)).toBe(-5);
            expect(add(-5 + 10)).toBe(5);
        });

        it('should sum a list of number separated by comma',()=>{
            expect(add(1,2,3)).toBe(6);
            expect(add(101,-32,31)).toBe(100);
        });

        it('should support an array of numbers',()=>{
            expect(add([1,2,3])).toBe(6);
            expect(add([101,-32,31])).toBe(100);
        });
    })
})