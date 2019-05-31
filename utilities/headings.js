import fontSizeCss from '../tools/fontSize';
import JSSConfig from '../settings/JSSConfig';

const JSS = JSSConfig.getInstance();

/**
 * Redefine all of our basic heading styles against utility classes so as to
 * allow for double stranded heading hierarchy, e.g. we semantically need an H2,
 * but we want it to be sized like an H1:
 *
 *   <h2 class="u-h1"></h2>
 *
 */

const printH = keyValue =>
  `.u-${Object.keys(keyValue)[0]} { ${fontSizeCss(
    Object.values(keyValue)[0],
    'auto',
    0,
    true,
  )} } \n`;

const obj2Arr = obj =>
  Array.from(Object.keys(obj), key => ({ [key]: obj[key] }));

const headingUtils = obj2Arr(JSS.fontSizeHeading).reduce(
  (prev, next) => prev + printH(next),
  '',
);

export default headingUtils;
