/* ==========================================================================
   #SHARED
   ========================================================================== */
import IJSSCore from '../settings/_settings.core';

const shared = `

/**
 * Shared declarations for certain elements.
 */
/**
 * Always declare margins in the same direction:
 * csswizardry.com/2012/06/single-direction-margin-declarations
 */
address,
  h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, ol, ul,
  figure,
  hr,
  table,
  fieldset {
  margin-bottom: ${IJSSCore.global_baseline * IJSSCore.global_spacing_unit_factor}px; }

/**
 * Consistent indentation for lists.
 */
dd, ol, ul {
  margin-left: ${IJSSCore.global_baseline * IJSSCore.global_spacing_unit_factor}px; }

/*# sourceMappingURL=test.css.map */
`;

export default shared;
