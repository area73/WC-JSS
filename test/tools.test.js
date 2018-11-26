
import minify from './utils/minify';

import clearFix from '../tools/clearfix';
import clearFixMock from './mocks/tools/clearFix.mock';

import hiddenVisually from '../tools/hidden';
import hiddenVisuallyMocks from './mocks/tools/hidden.mock';

import fontSizeCss from '../tools/fontSize';
import {
  modifier, fontAndLineHeight, onlyFont, important,
} from './mocks/tools/fontSize.mock';

import { roundNumber, addModifiers } from '../tools/utils';
import { addModifiersCustomMock, addModifiersGenericMock } from './mocks/tools/utils.mock';
import * as mqMock from './mocks/tools/mediaQuery.mock';
import mq from '../tools/mediaQuery';
import errorHandler from '../tools/errorHandler';
import errorHandlerMock from './mocks/tools/errorHandler.mock';

test('test clearFix tool', () => {
  expect(clearFix('.dummy')).toEqual(clearFixMock);
});

test('test hiddenVisually tool', () => {
  expect(hiddenVisually).toEqual(hiddenVisuallyMocks);
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
    margin: {value}px}\n`, { mod: 20 })).toEqual(addModifiersCustomMock);
});


test('test mediaQuery "Up to 600px"', () => {
  const mqObj = { selector: '.responsive:before', upTo: 600 };
  const mixins = ['content: "to 600px";'];
  expect(mq(mqObj, mixins)).toEqual(mqMock.upto600);
});

test('test mediaQuery Up to 600px and adding mixins', () => {
  const mqObj = { selector: '.responsive:before', upTo: 600 };
  const mixins = ['content: "to 600px";', hiddenVisually];
  expect(mq(mqObj, mixins)).toEqual(mqMock.upto600WithMixin);
});

test('test mediaQuery Up to 34em ', () => {
  const mqObj = { selector: '.responsive:before', upTo: '34em' };
  const mixins = ['content: "to 34em";'];
  expect(mq(mqObj, mixins)).toEqual(mqMock.upto34em);
});


test('test mediaQuery Up to mobile ', () => {
  const mqObj = { selector: '.responsive:before', upTo: 'mobile' };
  const mixins = ['content: "to mobile";'];
  expect(mq(mqObj, mixins)).toEqual(mqMock.uptoMobile);
});

test('test mediaQuery Up to custom breakpoint name ', () => {
  const mqObj = { selector: '.responsive:before', upTo: 'custom', breakpoints: { custom: 600 } };
  const mixins = ['content: "to custom";'];
  expect(mq(mqObj, mixins)).toEqual(mqMock.uptoCustomNamedBreakpoint);
});

test('test mediaQuery from mobile and up ', () => {
  const mqObj = { selector: '.responsive:before', from: 'mobile' };
  const mixins = ['content: "from mobile and up";'];
  expect(mq(mqObj, mixins)).toEqual(mqMock.fromMobileAndUp);
});

test('test mediaQuery from mobile to tablet (exclusive) ', () => {
  const mqObj = { selector: '.responsive:before', from: 'mobile', upTo: 'tablet' };
  const mixins = ['content: "from mobile to tablet";'];
  expect(mq(mqObj, mixins)).toEqual(mqMock.fromMobileToTablet);
});

test('test mediaQuery combine upper limit and custom directive ', () => {
  const mqObj = { selector: '.responsive:before', customDirective: '(orientation: landscape)', upTo: 'tablet' };
  const mixins = ['content: "to tablet and landscape";'];
  expect(mq(mqObj, mixins)).toEqual(mqMock.upToTabletAndLAndscape);
});

test('test mediaQuery combine upper limit, lower limit custom directive and mediaType ', () => {
  const mqObj = {
    selector: '.responsive:before',
    customDirective: '(orientation: landscape)',
    upTo: 'tablet',
    from: 'mobile',
    mediaType: 'screen, print',
  };
  const mixins = ['content: "to tablet and landscape";'];
  expect(mq(mqObj, mixins)).toEqual(mqMock.multipleCombine);
});

test('test mediaQuery not mediaType ', () => {
  const mqObj = {
    selector: '.responsive:before', mediaType: 'screen', upTo: 'tablet', invert: true,
  };
  const mixins = ['content: "will not apply to screen";'];
  expect(mq(mqObj, mixins)).toEqual(mqMock.invertMediaQuery);
});

test('test mediaQuery not mediaType Thrown an Error ', () => {
  const mqObj = {
    selector: '.responsive:before' , upTo: 'tablet', invert: true,
  };
  const mixins = ['content: "will not apply to screen";'];
  expect(mq(mqObj, mixins)).toEqual(mqMock.invertMediaQueryError);
});


test('errorHandler', () => {
  expect(errorHandler('This is an error shown on screen')).toEqual(errorHandlerMock)
});

