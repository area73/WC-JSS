// Mixin to drop micro clearfix into a selector. Further reading:
// http://www.cssmojo.com/the-very-latest-clearfix-reloaded/
//
// clearFix('.usage');
//

const clearFix = className => `
    ${className}:after {
      content: "" !important;
      display: block !important;
      clear: both !important;
    }`;

export default clearFix;
