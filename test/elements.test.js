
import minify from './utils/minify';
// import roundNumber from '../tools/utils';

import image from '../elements/images';
import _image from './mocks/elements/_image';
import headings from '../elements/headings';
import { _headingsAll, _headingsH3 } from './mocks/elements/_headings';

import table from '../elements/tables';
import _table from './mocks/elements/_tables';

import page from '../elements/page';
import _page from './mocks/elements/_page';



test('test image element', () => expect(minify(image)).toEqual(minify(_image)));

test('test headings element', () => expect(minify(headings())).toEqual(minify(_headingsAll)));
test('test headings element', () => expect(minify(headings(['h3']))).toEqual(minify(_headingsH3)));

test('test table element', () => expect(minify(table)).toEqual(minify(_table)));

test('test page element', () => expect(minify(page)).toEqual(minify(_page)));
