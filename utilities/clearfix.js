import clearFix from '../tools/clearfix';

/**
 * Attach our clearfix mixin to a utility class.
 */

const clearFixUtil = `
  ${clearFix('u-clearfix')}
`;

export default clearFixUtil;
