import inuitFontSize from '../tools/_tools.font-size.js';
import toEqualWithCompressedWhitespace from './utils/customMatchers.js';


test('adds 1 + 2 to equal 3', () => {
  expect(inuitFontSize(10)).toEqualWithCompressedWhitespace("wewewew eweweew  e wewe        ewewew");
  // expect(3).toBe(3);
});
