import JSSConfig from '../settings/JSSConfig';

const JSS = JSSConfig.getInstance();
const conf = {};
JSS.registerPlugin('generic', 'boxSizing', conf);
/**
 * More sensible default box-sizing:
 * css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice
 *
 * NOTE: Since we are working with web components we cannot set box-sizing to html
 * since inside shadow DOM will not take effect.
 * We also try to set box-sizing into :host and then inherit but this also will not work
 * because :host is outside of shadow DOM render tree.
 * That's why we are applying *, *:before, *:after directly the box-sizing to border-box
 * and not inherit because otherwise it will inherit from outside of the WC and we will loose
 * control of box-sizing since we can't assure it's border-box behaviour outside of our component
 *
 */

const boxSizing = `
  *, *:before, *:after {box-sizing: border-box; }
`;

export default boxSizing;
