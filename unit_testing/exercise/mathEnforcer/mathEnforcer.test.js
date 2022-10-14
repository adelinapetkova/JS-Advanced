const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer');

describe('mathEnforcer checker', () => {
    it('addFive function returns undefined when parameter is not a number', () => {
        let obj=mathEnforcer;
        expect(obj.addFive('3')).to.equal(undefined);
    })

    it('addFive function returns correct result when parameter is a number', () => {
        let obj=mathEnforcer;
        expect(obj.addFive(3)).to.equal(8);
    })

    it('addFive function returns correct result when parameter is a negative number', () => {
        let obj=mathEnforcer;
        expect(obj.addFive(-5)).to.equal(0);
    })

    it('addFive function returns correct result when parameter is a float', () => {
        let obj=mathEnforcer;
        expect(obj.addFive(3.5)).to.equal(8.5);
    })

    it('subtractTen function returns undefined when parameter is not a number', () => {
        let obj=mathEnforcer;
        expect(obj.subtractTen('3')).to.equal(undefined);
    })

    it('subtractTen function returns correct result when parameter is a number', () => {
        let obj=mathEnforcer;
        expect(obj.subtractTen(15)).to.equal(5);
    })

    it('subtractTen function returns correct result when parameter is a negative number', () => {
        let obj=mathEnforcer;
        expect(obj.subtractTen(-10)).to.equal(-20);
    })

    it('subtractTen function returns correct result when parameter is a float', () => {
        let obj=mathEnforcer;
        expect(obj.subtractTen(15.25)).to.equal(5.25);
    })

    it('sum function returns undefined when first parameter is not a number', () => {
        let obj=mathEnforcer;
        expect(obj.sum('15', 10)).to.equal(undefined);
    })

    it('sum function returns undefined when second parameter is not a number', () => {
        let obj=mathEnforcer;
        expect(obj.sum(15, '10')).to.equal(undefined);
    })

    it('sum function returns undefined when both parameters are not numbers', () => {
        let obj=mathEnforcer;
        expect(obj.sum('15', '10')).to.equal(undefined);
    })

    it('sum function returns correct result when both parameters are valid', () => {
        let obj=mathEnforcer;
        expect(obj.sum(15, 10)).to.equal(25);
    })

    it('sum function returns correct result when parameters are float', () => {
        let obj=mathEnforcer;
        expect(obj.sum(15.25, 10.25)).to.equal(25.5);
    })
})