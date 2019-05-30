import JSSConfig from '../settings/JSSConfig';

const JSS = JSSConfig.getInstance();
const conf = {};
JSS.registerPlugin('elements', 'table', conf);

const table = `
/**
 * 1. Ensure tables fill up as much space as possible.
 */

table {
  width: 100%; /* [1] */
}`;


export default table;
