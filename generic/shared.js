/* ==========================================================================
   #SHARED
   ========================================================================== */
import IJSSCore from '../settings/JSSCore';

/**
 * Shared declarations for certain elements.
 */
/**
 * Always declare margins in the same direction:
 * csswizardry.com/2012/06/single-direction-margin-declarations
 */
// TODO:  change px
const shared = `
address,
h1, h2, h3, h4, h5, h6,
blockquote, p, pre,
dl, ol, ul,
figure,
hr,
table,
fieldset {
  margin-bottom: ${IJSSCore.globalBaseline * IJSSCore.globalSpacingUnitFactor.normal}px; 
}

/** Consistent indentation for lists. */
dd, ol, ul {
  margin-left: ${IJSSCore.globalBaseline * IJSSCore.globalSpacingUnitFactor.normal}px; 
}`;

export default shared;
