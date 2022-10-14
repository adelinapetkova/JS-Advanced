const { expect } = require('chai');
const { isOddOrEven } = require('./isOddOrEven');

describe('isOddOrEven checker', () => {
    it('returns undefined when value is not a string', () => {
        expect(isOddOrEven(20)).to.equal(undefined);
    })

    it('returns even when string length is even', () => {
        expect(isOddOrEven('even')).to.equal('even');
    })

    it('returns odd when string length is odd', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
    })
})
