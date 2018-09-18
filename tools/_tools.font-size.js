// /* ========================================================================
//   #FONT-SIZE
//   ======================================================================== */

// Generates a rem font-size (with pixel fallback) and a baseline-compatible
// unitless line-height from a pixel font-size value. Basic usage is simply:
//
//   @include inuit-font-size(18px);
//
// You can force a specific line-height by passing it as the second argument:
//
//   @include inuit-font-size(16px, 1);
//
// You can also modify the line-height by increments, while staying in the
// baseline grid, by setting the `$modifier` parameter. It takes a positive
// or negative integer, and it will add or remove "lines" to the  generated
// line-height. This is the recomended way to do it, unless you really need
// an absolute value. i.e.:
//
//   // add 2 lines:
//   @include inuit-font-size(24px, $modifier: +2);
//
//   // subtract 1 line:
//   @include inuit-font-size(24px, $modifier: -1);

import IJSSCore from '../settings/_settings.core';

/**
 *
 * @param fontSize {number} a number expressed in px
 * @param lineHeight {(String|number|null)} line height Possible values are:
 *        'normal' | number | length | 'initial' | 'inherit | 'auto' | null
 * @param modifier {number} if lineHeight = auto we can set an extra gap
 * @param important {Boolean} if true will add !important
 * @returns {string} a font-size with fallback
 */
const inuitFontSize = (fontSize, lineHeight = 'auto', modifier = 0, important = false) => {
  if (typeof fontSize !== 'number' || typeof modifier !== 'number') {
    throw new Error('font size is not a number');
  }

  const importantValue = important ? '!important' : '';
  const lines = () => Math.ceil(fontSize / IJSSCore.global_baseline) + modifier + 1;
  const lineHeightNum = () => lines() * IJSSCore.global_baseline;

  // Define how many grid lines each text line should span.
  // By default, we set it to the minimum number of lines necessary
  // in order to contain the defined font-size, +1 for some breathing room.
  // This can be modified with the `$modifier` parameter.
  const lineHeightCalc = () => (lineHeight === 'auto'
    ? `line-height: ${lineHeightNum() / fontSize} ${importantValue};`
    : `line-height: ${lineHeight} ${importantValue};`);

  return `
    font-size: ${fontSize}px ${importantValue};
    font-size: ${(fontSize / IJSSCore.global_font_size)}rem ${importantValue};
    ${lineHeightCalc()}
  `;
};

export default inuitFontSize;
