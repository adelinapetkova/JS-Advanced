const { expect } = require('chai');
const { sum } = require('./sumNumbers');

describe('Sum numbers', () => {
    it('works with numeric array', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    })
});