// /* ========================================================================
//   #FONT-SIZE
//   ======================================================================== */

// Generates a rem font-size (with pixel fallback) and a baseline-compatible
// unitless line-height from a pixel font-size value.
//
// You can force a specific line-height by passing it as the second argument:
// fontSizeCss(16px, 1);
//
// You can also modify the line-height by increments, while staying in the
// baseline grid, by setting the 'modifier' parameter. It takes a positive
// or negative integer, and it will add or remove "lines" to the  generated
// line-height. This is the recomended way to do it, unless you really need
// an absolute value. i.e.:

//   // add 2 lines:
//   fontSizeCss(24px, 'auto', 2);
//
//   // subtract 1 line:
//   fontSizeCss(24px, 'auto', -1);


import { roundNumber } from './utils';
import JSSConfig from '../settings/JSSConfig';

const conf = {
  legacyFallback: false,
}

const JSS = JSSConfig.getInstance();

JSS.registerPlugin('tools', 'fontSize', conf);


/**
 *
 * @param fontSize {number} a number expressed in px
 * @param lineHeight {(String|number|null)} line height Possible values are:
 *        'normal' | number | length | 'initial' | 'inherit | 'auto' | null
 * @param modifier {number} if lineHeight = auto we can set an extra gap
 * @param important {Boolean} if true will add !important
 * @returns {string} a font-size with fallback
 */
const fontSizeCss = (fontSize, lineHeight = 'auto', modifier = 0, important = false) => {
  if (typeof fontSize !== 'number' || typeof modifier !== 'number') {
    throw new Error('font size is not a number');
  }
  const importantValue = important ? '!important' : '';
  const lines = () => Math.ceil(fontSize / JSS.globalBaseline) + modifier + 1;
  const lineHeightNum = () => lines() * JSS.globalBaseline;

  // Define how many grid lines each text line should span.
  // By default, we set it to the minimum number of lines necessary
  // in order to contain the defined font-size, +1 for some breathing room.
  // This can be modified with the modifier parameter.
  const lineHeightCalc = () => (lineHeight === 'auto'
    ? `line-height: ${roundNumber(lineHeightNum() / fontSize, 2)} ${importantValue};`
    : `line-height: ${roundNumber(lineHeight, 2)}  ${importantValue};`);

  return ` ${JSS.tools.fontSize.legacyFallback ? ` \n font-size: ${fontSize}px ${importantValue};` : ''}
    font-size: ${(fontSize / JSS.globalFontSize)}rem ${importantValue};
    ${lineHeightCalc()}
  `;
};

export default fontSizeCss;
