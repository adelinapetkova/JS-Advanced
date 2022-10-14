const { expect } = require('chai');
const { lookupChar } = require('./charLookUp');

describe('charLookUp checker', () => {
    it('returns undefined when first parameter is not a string', () => {
        expect(lookupChar(23, 0)).to.equal(undefined);
    })

    it('returns undefined when second parameter is not a number', () => {
        expect(lookupChar('string', 'NaN')).to.equal(undefined);
    })

    it('returns undefined when index is a float', () => {
        expect(lookupChar('string', 2.5)).to.equal(undefined);
    })

    it('return "Incorrect index" when index is a negative number', () => {
        expect(lookupChar('string', -1)).to.equal("Incorrect index")
    })

    it('return "Incorrect index" when index is equal to string length', () => {
        expect(lookupChar('string', 6)).to.equal("Incorrect index")
    })

    it('return "Incorrect index" when index is bigger than string length', () => {
        expect(lookupChar('string', 10)).to.equal("Incorrect index")
    })

    it('returns correct character when string and index are valid', () => {
        expect(lookupChar('string', 0)).to.equal('s');
    })

    it('returns correct character when string and index are valid', () => {
        expect(lookupChar('string', 5)).to.equal('g');
    })

    it('returns correct character when string and index are valid', () => {
        expect(lookupChar('a', 0)).to.equal('a');
    })
})