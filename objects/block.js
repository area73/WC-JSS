/**
 * Stacked imageMock-with-text object. A simple abstraction to cover a very commonly
 * occurring design pattern.
 */
import JSSConfig from '../settings/JSSConfig';
import { addModifiers } from '../tools/utils';

const JSS = JSSConfig.getInstance();
const conf = {};

JSS.registerPlugin('object', 'block', conf);

const modifierStr = `
  .o-block__img .o-block--{key} > & { margin-bottom: {value}px; }
`;

const block = `
.o-block { display: block; text-align: center; }
.o-block__img { margin-bottom: ${JSS.globalSpacing}px; }
/* Size variants
   ====================================================================== */
${addModifiers(modifierStr)}       
.o-block__body { display: block;}
/* Alignment variants
   ========================================================================== */
.o-block--right { text-align: right; }
.o-block--left { text-align: left; }
`;

export default block;
