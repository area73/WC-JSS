
import minify from './utils/minify';
// import roundNumber from '../tools/utils';

import image                        from '../elements/images';
import imageMock                    from './mocks/elements/image.mock';
import headings                     from '../elements/headings';
import { headingsAll, headingsH3 } from './mocks/elements/headings.mock';

import table     from '../elements/tables';
import tableMock from './mocks/elements/tables.mock';

import page     from '../elements/page';
import pageMock from './mocks/elements/page.mock';


test('test image element', () => expect(image).toEqual(imageMock));

test('test headings  All element', () => expect(minify(headings())).toEqual(minify(headingsAll)));
test('test headings  h3 element', () => expect(minify(headings(['h3']))).toEqual(minify(headingsH3)));

test('test table element', () => expect(table).toEqual(tableMock));

test('test page element', () => expect(minify(page)).toEqual(minify(pageMock)));
