
import minify from './utils/minify';

import clearFix from '../tools/clearfix';
import clearFixMock from './mocks/tools/clearFix.mock';

import hiddenVisually from '../tools/hidden';
import hiddenVisuallyMocks from './mocks/tools/hidden.mock';

import fontSize from '../tools/fontSize';
import {
  modifier, fontAndLineHeight, onlyFont, important,
} from './mocks/tools/fontSize.mock';

import roundNumber from '../tools/utils';

test('test clearFix tool', () => {
  expect(minify(clearFix('.dummy'))).toEqual(minify(clearFixMock));
});

test('test hiddenVisually tool', () => {
  expect(minify(hiddenVisually)).toEqual(minify(hiddenVisuallyMocks));
});


test('test fontSize tool', () => {
  expect(minify(fontSize(22))).toEqual(minify(onlyFont));
});
test('test fontSize with line Height tool', () => {
  expect(minify(fontSize(22, 5))).toEqual(minify(fontAndLineHeight));
});

test('test fontSize with line Height modifier', () => {
  expect(minify(fontSize(22, 'auto', 2))).toEqual(minify(modifier));
});

test('test fontSize with !important', () => {
  expect(minify(fontSize(22, 'auto', 2, true))).toEqual(minify(important));
});

test('test utils roundNumber', () => {
  expect(roundNumber(12.499, 2)).toEqual(12.5);
});

test('test utils roundNumber', () => {
  expect(roundNumber(12.0001, 2)).toEqual(12);
});
