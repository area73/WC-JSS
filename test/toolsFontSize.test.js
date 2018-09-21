import inuitFontSize from '../tools/_tools.font-size';
import toEqualWithCompressedWhitespace from './utils/customMatchers.js';
import headings from '../elements/_elements.headings';
import spacing from '../utilities/_utilities.spacings';
import crop from '../objects/_objects.crop';
import flag from '../objects/_objects.flag';
import ratio from '../objects/_objects.ratio';
import widths from '../utilities/_utilities.widths';

xtest('adds 1 + 2 to equal 3', () => {
   expect(inuitFontSize(10)).toBe('');
});

xtest('test headings', () => {
  expect(headings).toEqual('');
});


xtest('test crop', () => {
  expect(crop).toEqual('');
});


xtest('test ratio', () => {
  expect(ratio).toEqual('');
});


xtest('test spacing', () => {
  console.log(spacing)
  expect(spacing).toEqual('');
});



test('test widths', () => {
  console.log(widths)
  expect(widths).toEqual('');
});
