import inuitFontSize from '../tools/_tools.font-size';
import toEqualWithCompressedWhitespace from './utils/customMatchers.js';
import headings from '../elements/_elements.headings';
import crop from '../objects/_objects.crop';
import flag from '../objects/_objects.flag';
import ratio from '../objects/_objects.ratio';
import spacing from '../utilities/_utilities.spacings';


xtest('adds 1 + 2 to equal 3', () => {
  expect(inuitFontSize(10)).toEqualWithCompressedWhitespace("wewewew eweweew  e wewe        ewewew");
  // expect(3).toBe(3);
});

xtest('test headings', () => {
  expect(headings).toEqual("");
})


xtest('test crop', () => {
  expect(crop).toEqual("");
})


xtest('test ratio', () => {
  expect(ratio).toEqual("");
})


test('test spacing', () => {
  expect(spacing).toEqual("");
})
