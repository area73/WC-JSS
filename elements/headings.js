import fontSizeCss from '../tools/fontSize';
import JSSConfig from '../settings/JSSConfig';

const JSS = JSSConfig.getInstance();
const conf = {
  defaultVal: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
};
JSS.registerPlugin('elements', 'headings', conf);

/**
 * Simple default styles for headings 1 through 6. Anything more opinionated
 * than simple font-size changes should likely be applied via classes (see:
 * http://csswizardry.com/2016/02/managing-typography-on-large-apps/).
 *
 * We have all of our heading font sizes defined here. Passing these pixel
 * values into our fontSize() tool will generate a rem-based
 * 'font-size' with a pixel fallback, as well as generating a 'line-height' that
 * will sit on our baseline grid.
 */

const headings = arrObj =>
  (arrObj || JSS.elements.headings.defaultVal).reduce(
    (prev, next) =>
      `${prev}${next} {${fontSizeCss(JSS.fontSizeHeading[next])}}\n`,
    '',
  );
export default headings;
