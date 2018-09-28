/* ==========================================================================
   #BOX-SIZING
   ========================================================================== */

/**
 * More sensible default box-sizing:
 * css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice
 *
 * NOTE: Since we are working with web components , box sizing will have to be
 * set at host level  and not at html tag
 *
 */
const boxSizing = `
  :host  {box-sizing: border-box; }
  *, *:before, *:after {box-sizing: inherit; }
`;

export default boxSizing;
