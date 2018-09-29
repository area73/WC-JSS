
import minify from './utils/minify';

import clearFix from '../tools/clearfix';
import clearFixMock from './mocks/tools/clearFix.mock';

import hiddenVisually from '../tools/hidden';
import hiddenVisuallyMocks from './mocks/tools/hidden.mock';

import fontSizeCss from '../tools/fontSize';
import {
  modifier, fontAndLineHeight, onlyFont, important,
} from './mocks/tools/fontSize.mock';

import {roundNumber, addModifiers} from '../tools/utils';
import {addModifiersCustomMock, addModifiersGenericMock} from './mocks/tools/utils.mock';

test('test clearFix tool', () => {
  expect(minify(clearFix('.dummy'))).toEqual(minify(clearFixMock));
});

test('test hiddenVisually tool', () => {
  expect(minify(hiddenVisually)).toEqual(minify(hiddenVisuallyMocks));
});


test('test fontSize tool', () => {
  expect(fontSizeCss(22)).toEqual(onlyFont);
});
test('test fontSize with line Height tool', () => {
  expect(fontSizeCss(22, 5)).toEqual(fontAndLineHeight);
});

test('test fontSize with line Height modifier', () => {
  expect(fontSizeCss(22, 'auto', 2)).toEqual(modifier);
});

test('test fontSize with !important', () => {
  expect(fontSizeCss(22, 'auto', 2, true)).toEqual(important);
});

test('test utils roundNumber', () => {
  expect(roundNumber(12.499, 2)).toEqual(12.5);
});

test('test utils roundNumber', () => {
  expect(roundNumber(12.0001, 2)).toEqual(12);
});

test('test utils addModifiers [GENERIC] ', () => {
   expect(addModifiers(`
   .o-test--{key} { 
    padding: {value}px; 
    margin: {value}px}\n`)).toEqual(addModifiersGenericMock);
});

test('test utils addModifiers [CUSTOM]', () => {
  expect(addModifiers(`
   .o-test--{key} { 
    padding: {value}px; 
    margin: {value}px}\n`, {mod:20})).toEqual(addModifiersCustomMock);
});

