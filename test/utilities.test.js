import { widthsAll, widthsGroup, widths } from '../utilities/widths';
import {
  specificWidthsMocks,
  widthsGroupsMock,
  widthsAllMock,
} from './mocks/utilities/widths.mock';
import spacing from '../utilities/spacings';
import spacingMock from './mocks/utilities/spacing.mock';
import print from '../utilities/print';
import printMock from './mocks/utilities/print.mock';
import hideUtils from '../utilities/hide';
import hideUtilsMock from './mocks/utilities/hide.mock';
import headingUtils from '../utilities/headings';
import headingUtilsMock from './mocks/utilities/headings.mock';
import clearFixUtil from '../utilities/clearfix';
import clearFixUtilMock from './mocks/utilities/clearFix.mock';

test('test widthsAll utility', () => {
  expect(widthsAll).toEqual(widthsAllMock);
});

test('test  widthsGroup utility', () => {
  expect(widthsGroup([1, 4, 16])).toEqual(widthsGroupsMock);
});

test('test  specific widths utility', () => {
  expect(widths(['1/2', '1/4', '2/3'])).toEqual(specificWidthsMocks);
});

test('test spacing utility', () => {
  expect(spacing).toEqual(spacingMock);
});

test('test print utility', () => {
  expect(print).toEqual(printMock);
});

test('test hide utility', () => {
  expect(hideUtils).toEqual(hideUtilsMock);
});

test('test Headings utility', () => {
  expect(headingUtils).toEqual(headingUtilsMock);
});

test('test clearFix utility', () => {
  expect(clearFixUtil).toEqual(clearFixUtilMock);
});
