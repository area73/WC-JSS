
import minify from './utils/minify';

import boxSizing     from '../generic/boxSizing';
import boxSizingMock from './mocks/generic/boxSizing.mock';
import shared        from '../generic/shared';
import shareMock     from './mocks/generic/shared.mock';
import reset         from '../generic/reset';
import resetMock     from './mocks/generic/reset.mock';



test('test boxSizing tool', () => {
  expect(minify(boxSizing)).toEqual(minify(boxSizingMock));
});

test('test shared tool', () => {
  expect(minify(shared)).toEqual(minify(shareMock));
});

test('test reset tool', () => {
  expect(minify(reset)).toEqual(minify(resetMock));
});
