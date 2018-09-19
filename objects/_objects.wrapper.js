import IJSSCore from '../settings/_settings.core';
import clearFix from '../tools/_tools.clearfix';
/* ==========================================================================
   #WRAPPER
   ========================================================================== */


const inuit_wrapper_width = '1200px';

const wrapper = `

/**
 * Page-level constraining and wrapping elements.
 */


${clearFix('.o-wrapper')}
.o-wrapper {
  padding-right: ${IJSSCore.global_spacing_unit};
  padding-left:   ${IJSSCore.global_spacing_unit};
  margin-right: auto;
  margin-left:  auto;
  max-width: ${inuit_wrapper_width};
}
`;


export default wrapper;
