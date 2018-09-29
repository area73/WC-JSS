import wrapper     from '../objects/wrapper';
import wrapperMock from './mocks/objects/wrapper.mock';
import table       from '../objects/table';
import tableMock   from './mocks/objects/table.mock';
import ratio       from '../objects/ratio';
import ratioMock   from './mocks/objects/ratio.mock';
import layout      from '../objects/layout';
import layoutMock  from './mocks/objects/layout.mock';
import pack        from '../objects/pack';
import packMock    from './mocks/objects/pack.mock';
import media       from '../objects/_objects.media';
import mediaMock from './mocks/objects/media.mock';


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
