import wrapper from '../objects/wrapper';
import wrapperMock from './mocks/objects/wrapper.mock';
import table from '../objects/table';
import tableMock from './mocks/objects/table.mock';
import ratio from '../objects/ratio';
import ratioMock from './mocks/objects/ratio.mock';
import layout from '../objects/layout';
import layoutMock from './mocks/objects/layout.mock';
import pack from '../objects/pack';
import packMock from './mocks/objects/pack.mock';
import media from '../objects/media';
import mediaMock from './mocks/objects/media.mock';
import listInline from '../objects/listInline';
import listInlineMock from './mocks/objects/listInline.mock';
import crop from '../objects/crop';
import cropMock from './mocks/objects/crop.mock';
import box from '../objects/box';
import boxMock from './mocks/objects/box.mock';
import block from '../objects/block';
import blockMock from './mocks/objects/block.mock';

test('test wrapper object', () => {
  expect(wrapper).toEqual(wrapperMock);
});

test('test table object', () => {
  expect(table).toEqual(tableMock);
});

test('test ratio object', () => {
  expect(ratio).toEqual(ratioMock);
});

test('test layout object', () => {
  expect(layout).toEqual(layoutMock);
});

test('test pack object', () => {
  expect(pack).toEqual(packMock);
});

test('test media object', () => {
  expect(media).toEqual(mediaMock);
});

test('test list-inline object', () => {
  expect(listInline).toEqual(listInlineMock);
});

test('test crop object', () => {
  expect(crop).toEqual(cropMock);
});

test('test box object', () => {
  expect(box).toEqual(boxMock);
});

test('test BLOCK object', () => {
  expect(block).toEqual(blockMock);
});
