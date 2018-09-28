/* ==========================================================================
   #HEADINGS
   ========================================================================== */
import IJSSCore    from '../settings/JSSCore';
import fontSizeCss from '../tools/fontSize';

/**
 * Simple default styles for headings 1 through 6. Anything more opinionated
 * than simple font-size changes should likely be applied via classes (see:
 * http://csswizardry.com/2016/02/managing-typography-on-large-apps/).
 */

// We have all of our heading font sizes defined here. Passing these pixel
// values into our fontSize()` tool will generate a rem-based
// 'font-size' with a pixel fallback, as well as generating a 'line-height' that
// will sit on our baseline grid.

// TODO: Happy path done. Implement solution when erroneous input enter

const defaultVal = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const headings = arrObj => (arrObj || defaultVal)
  .reduce((prev, next) => `${prev}${next} {  ${fontSizeCss(IJSSCore.fontSizeHeading[next])}px; }\n`, '');

export default headings;
