///* ========================================================================
//   #CLEARFIX
//   ======================================================================== */

// Mixin to drop micro clearfix into a selector. Further reading:
// http://www.cssmojo.com/the-very-latest-clearfix-reloaded/
//
// inuit_clearfix('.usage');
//


const clearFix = (className) => {
  return `
    ${className}:after {
      content: "" !important;
      display: block !important;
      clear: both !important;
    }`;
}


export default clearFix;

