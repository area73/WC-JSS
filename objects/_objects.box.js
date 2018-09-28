/* ==========================================================================
   #BOX
   ========================================================================== */


import IJSSCore from '../settings/JSSCore';
import clearFix from '../tools/_tools.clearfix';

const box = `

/**
 * The box object simply boxes off content. Extend with cosmetic styles in the
 * Components layer.
 *
 * 1. So we can apply the `.o-box` class to naturally-inline elements.
 */

${clearFix('o-box')}
.o-box {
  display: block; /* [1] */
  padding: ${IJSSCore.global_spacing_unit}px;
  > :last-child {
    margin-bottom: 0;
  }
}

/* Size variants
   ========================================================================== */

.o-box--flush {
  padding: 0;
}

.o-box--tiny {
  padding: ${IJSSCore.global_spacing_unit_tiny}px;
}

.o-box--small {
  padding: ${IJSSCore.global_spacing_unit_small}px;
}

.o-box--large {
  padding: ${IJSSCore.global_spacing_unit_large}px;
}

.o-box--huge {
  padding: ${IJSSCore.global_spacing_unit_huge}px;
}`;

export default box;
