const tableMock = `
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
 
    .o-table--none th,
    .o-table--none td{
      padding: 0px;
    }
    .o-table--tiny th,
    .o-table--tiny td{
      padding: 6px;
    }
    .o-table--small th,
    .o-table--small td{
      padding: 12px;
    }
    .o-table--normal th,
    .o-table--normal td{
      padding: 24px;
    }
    .o-table--large th,
    .o-table--large td{
      padding: 48px;
    }
    .o-table--huge th,
    .o-table--huge td{
      padding: 96px;
    }
`;

export default tableMock;
