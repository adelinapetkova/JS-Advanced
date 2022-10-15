const { expect } = require('chai');
const { rgbToHexColor } = require('./rgb-to-hex');

describe('RGB to Hex color checker', () => {
    it('works with values in the lower range', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    })

    it('works with values in the middle range', () => {
        expect(rgbToHexColor(100, 100, 100)).to.equal('#646464');
    })

    it('works with values in the higher range', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    })

    it('returns undefined when red is negative', () => {
        expect(rgbToHexColor(-1, 255, 255)).to.equal(undefined);
    })

    it('returns undefined when green is negative', () => {
        expect(rgbToHexColor(255, -1, 255)).to.equal(undefined);
    })

    it('returns undefined when blue is negative', () => {
        expect(rgbToHexColor(255, 255, -1)).to.equal(undefined);
    })

    it('returns undefined when red is over the range', () => {
        expect(rgbToHexColor(256, 255, 255)).to.equal(undefined);
    })

    it('returns undefined when green is over the range', () => {
        expect(rgbToHexColor(255, 256, 255)).to.equal(undefined);
    })

    it('returns undefined when blue is over the range', () => {
        expect(rgbToHexColor(255, 255, 256)).to.equal(undefined);
    })

    it('returns undefined when red is not an integer', () => {
        expect(rgbToHexColor('5', 0, 0)).to.equal(undefined);
    })

    it('returns undefined when green is not an integer', () => {
        expect(rgbToHexColor(0, '5', 0)).to.equal(undefined);
    })

    it('returns undefined when blue is not an integer', () => {
        expect(rgbToHexColor(0, 0, '5')).to.equal(undefined);
    })
});