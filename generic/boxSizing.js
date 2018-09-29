import JSSConfig from '../JSSConfig';

const IJSSCore = JSSConfig.getInstance();
const conf = {
  rootEl:':host'
};
IJSSCore.registerPlugin('generic', 'boxSizing', conf);

/**
 * More sensible default box-sizing:
 * css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice
 *
 * NOTE: Since we are working with web components , box sizing will have to be
 * set at host level  and not at html tag
 *
 */
const boxSizing = `
  ${IJSSCore.generic.boxSizing.rootEl}  {box-sizing: border-box; }
  *, *:before, *:after {box-sizing: inherit; }
`;

export default boxSizing;
