/**
 * A simple object for manipulating the structure of HTML 'table's.
 */
import JSSConfig from '../settings/JSSConfig';

const JSS = JSSConfig.getInstance();

const tableVariants = spacingUnit => {
  let output = '';
  Object.keys(spacingUnit).forEach(key => {
    output += `
    .o-table--${key} th,
    .o-table--${key} td{
      padding: ${spacingUnit[key]}px;
    }`;
  });
  return output;
};

const table = `
.o-table {
  width: 100%;
}

/* Equal-width table cells
   ========================================================================== */
/**
 * 'table-layout: fixed' forces all cells within a table to occupy the same
 * width as each other. This also has performance benefits: because the browser
 * does not need to (re)calculate cell dimensions based on content it discovers,
 * the table can be rendered very quickly. Further reading:
 * https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout#Values
 */

.o-table--fixed {
  table-layout: fixed;
}

/* Size variants
   ========================================================================== */
 ${tableVariants(JSS.globalSpacing)}
`;

export default table;
