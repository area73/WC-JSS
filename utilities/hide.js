import hideVisually from '../tools/hidden';

/* ==========================================================================
   #HIDE
   ========================================================================== */

const hideUtils = `
  /**
   * Hide only visually, but have it available for screen readers:
   * http://snook.ca/archives/html_and_css/hiding-content-for-accessibility
   */
  
  .u-hidden-visually {
    ${hideVisually}
  }
    
  /**
   * Hide visually and from screen readers.
   */
  
  .u-hidden {
    display: none !important;
  }

`;

export default hideUtils;
