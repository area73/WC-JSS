/* ==========================================================================
   #BOX
   ========================================================================== */

import JSSConfig from '../JSSConfig';
import clearFix from '../tools/clearfix';
import {addModifiers} from '../tools/utils';

const IJSSCore = JSSConfig.getInstance();
const conf = {};

IJSSCore.registerPlugin('objects', 'box', conf);

const modifierStr = `
.o-box--{key} {
  padding: {value}px;
}

`;

const box = `
/**
 * The box object simply boxes off content. Extend with cosmetic styles in the
 * Components layer.
 *
 * 1. So we can apply the '.o-box' class to naturally-inline elements.
 */

${clearFix('o-box')}
.o-box {
  display: block; /* [1] */
  padding: ${IJSSCore.globalSpacingUnit}px;
  }
  .o-box > :last-child {
    margin-bottom: 0;
  }


/* Size variants
   ========================================================================== */
${addModifiers(modifierStr)}
`;
export default box;
