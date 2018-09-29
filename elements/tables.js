import JSSConfig from '../JSSConfig';

const IJSSCore = JSSConfig.getInstance();
const conf = {};
IJSSCore.registerPlugin('elements', 'table', conf);

const table = `
/**
 * 1. Ensure tables fill up as much space as possible.
 */

table {
  width: 100%; /* [1] */
}`;


export default table;
