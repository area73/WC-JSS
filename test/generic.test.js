import minify from './utils/minify';

import boxSizing from '../generic/boxSizing';
import boxSizingMock from './mocks/generic/boxSizing.mock';
import shared from '../generic/shared';
import shareMock from './mocks/generic/shared.mock';
import reset from '../generic/reset';
import resetMock from './mocks/generic/reset.mock';
import { fontFamily, fontFace } from '../generic/fonts';
import { fontFamilyMock, fontFaceMock } from './mocks/generic/fonts.mock';

test('test boxSizing generic', () => {
  expect(minify(boxSizing)).toEqual(minify(boxSizingMock));
});

test('test shared generic', () => {
  expect(minify(shared)).toEqual(minify(shareMock));
});

test('test reset generic', () => {
  expect(minify(reset)).toEqual(minify(resetMock));
});

test('test fontFamily generic', () => {
  expect(minify(fontFamily)).toEqual(minify(fontFamilyMock));
});

test('test fontFace generic', () => {
  expect(fontFace()).toEqual(fontFaceMock);
});
