import IJSSCore    from '../settings/_settings.core';
import fontSizeCss from '../tools/_tools.font-size';

/* ==========================================================================
   #HEADINGS
   ========================================================================== */

const headingUtils = `
  
  /**
   * Redefine all of our basic heading styles against utility classes so as to
   * allow for double stranded heading hierarchy, e.g. we semantically need an H2,
   * but we want it to be sized like an H1:
   *
   *   <h2 class="u-h1"></h2>
   *
   */
  
  .u-h1 {
    ${fontSizeCss(IJSSCore.inuit_font_size_h1, 'auto', 0, true)}
  }
  
  .u-h2 {
    ${fontSizeCss(IJSSCore.inuit_font_size_h2, 'auto', 0, true)}
  }
  
  .u-h3 {
    ${fontSizeCss(IJSSCore.inuit_font_size_h3, 'auto', 0, true)}
  }
  
  .u-h4 {
    ${fontSizeCss(IJSSCore.inuit_font_size_h4, 'auto', 0, true)}
  }
  
  .u-h5 {
    ${fontSizeCss(IJSSCore.inuit_font_size_h5, 'auto', 0, true)}
  }
  
  .u-h6 {
    ${fontSizeCss(IJSSCore.inuit_font_size_h6, 'auto', 0, true)}
  }
  
`;

export default headingUtils;
