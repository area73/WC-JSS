/* ==========================================================================
   #WIDTHS
   ========================================================================== */
/**
 * inuitcss generates a series of utility classes that give a fluid width to
 * whichever element they’re applied, e.g.:
 *
 *   <img src="" alt="" class="u-1/2" />
 *
 * These classes are most commonly used in conjunction with our layout system,
 * e.g.:
 *
 *   <div class="o-layout__item  u-1/2">
 *
 * By default, inuitcss will also generate responsive variants of each of these
 * classes by using your Sass MQ configuration, e.g.:
 *
 *   <div class="o-layout__item  u-1/1  u-1/2@tablet  u-1/3@desktop">
 *
 * Optionally, inuitcss can generate offset classes which can push and pull
 * elements left and right by a specified amount, e.g.:
 *
 *   <div class="o-layout__item  u-2/3  u-pull-1/3">
 *
 * This is useful for making very granular changes to the rendered order of
 * items in a layout.
 *
 * N.B. This option is turned off by default.
 */

import {roundNumber} from '../tools/utils';
import JSSConfig from '../JSSConfig';

const IJSSCore = JSSConfig.getInstance();
const conf = {
  fractions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  offSetPull: true,
  offSetPush: true,
  widthsDelimiter: '\/',
};

IJSSCore.registerPlugin('utilities', 'widths', conf);

const fraction2percent = (dividend, divisor) => (roundNumber((dividend / divisor) * 100, 4));

const printFraction = (dividend, divider) => `.u-${dividend}${IJSSCore.utilities.widths.widthsDelimiter}${divider} {width: ${fraction2percent(dividend, divider)}% !important;}`;

const printPull = (dividend, divider) => `.u-pull-${dividend}${IJSSCore.utilities.widths.widthsDelimiter}${divider}  {
      position: relative !important;
      right: ${fraction2percent(dividend, divider)}% !important;
      left: auto !important; /!* [1] *!/
   }`;

// [1]. Reset any leftover or conflicting 'left'/'right' values.

const printPush = (dividend, divider) => `.u-push-${dividend}${IJSSCore.utilities.widths.widthsDelimiter}${divider} {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: ${fraction2percent(dividend, divider)}% !important;
    }`;


const generateFractions = (divider) => {
  let acc = '';
  for (let dividend = 1; dividend <= divider; dividend += 1) {
    acc += `
      ${printFraction(dividend, divider)}
      ${IJSSCore.utilities.widths.offSetPull && printPull(dividend, divider)}
      ${IJSSCore.utilities.widths.offSetPush && printPush(dividend, divider)}
    `;
  }
  return acc;
};


const fractionDecons = fractionString => (
  {
    dividend: fractionString.substring(0, fractionString.indexOf('/')),
    divider: fractionString.substring(fractionString.indexOf('/') + 1, fractionString.length),
  }
);

const generateUniqFractions = fractionsArr => fractionsArr
  .reduce((prev, next) => {
    const { dividend, divider } = fractionDecons(next);
    return prev
      + printFraction(dividend, divider) + '\n'
      + (IJSSCore.utilities.widths.offSetPull && printPull(dividend, divider)) + '\n'
      + (IJSSCore.utilities.widths.offSetPush && printPush(dividend, divider)) + '\n';
  }, '\n');


const uFractions = inuitFractions => inuitFractions.reduce((prev, next) => `${prev}\n${generateFractions(next)}`, '');


const widthsAll = uFractions(IJSSCore.utilities.widths.fractions);

const widthsGroup = widthArray => uFractions(widthArray);

const widths = arr => generateUniqFractions(arr);

export { widthsAll, widthsGroup, widths };
