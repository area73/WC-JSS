import minify from './utils/minify';

import image                        from '../elements/images';
import imageMock                    from './mocks/elements/image.mock';
import headings                     from '../elements/headings';
import { headingsAll, headingsH3 } from './mocks/elements/headings.mock';

import table     from '../elements/tables';
import tableMock from './mocks/elements/tables.mock';

import page     from '../elements/page';
import pageMock from './mocks/elements/page.mock';


test('test image element', () => expect(image).toEqual(imageMock));

test('test headings  All element', () => expect(headings()).toEqual(headingsAll));
test('test headings  h3 element', () => expect(headings(['h3'])).toEqual(headingsH3));

test('test table element', () => expect(table).toEqual(tableMock));

test('test page element', () => expect(page).toEqual(pageMock));
