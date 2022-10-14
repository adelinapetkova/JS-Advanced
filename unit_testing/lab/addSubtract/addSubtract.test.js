const { expect } = require('chai');
const { createCalculator } = require('./addSubtract');

describe('Add/Subtract checker', () => {
    it('returns object', () => {
        expect( typeof (createCalculator())).to.equal('object')
    })

    it('returns object containing the function add', () => {
        expect((createCalculator())).haveOwnProperty('add')
    })

    it('returns object containing the function subtract', () => {
        expect((createCalculator())).haveOwnProperty('subtract')
    })

    it('returns object containing the function get', () => {
        expect((createCalculator())).haveOwnProperty('get')
    })

    it('keeps an internal sum that can`t be changed', () => {
        let obj=createCalculator();
        obj.value=23;
        expect(obj.get()).to.equal(0);
    })

    it('add function takes a numeric parameter and adds it to the sum', () => {
        let obj=createCalculator();
        obj.add(5);
        expect(obj.get()).to.equal(5);
    })

    it('add function takes a string parameter, parses it to number and adds it to the sum', () => {
        let obj=createCalculator();
        obj.add('5');
        expect(obj.get()).to.equal(5);
    })

    it('subtract function takes a numeric parameter and removes it from the sum', () => {
        let obj=createCalculator();
        obj.subtract(5);
        expect(obj.get()).to.equal(-5);
    })

    it('subtract function takes a string parameter, parses it to number and removes it from the sum', () => {
        let obj=createCalculator();
        obj.subtract('5');
        expect(obj.get()).to.equal(-5);
    })
})