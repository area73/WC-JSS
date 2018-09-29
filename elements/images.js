import JSSConfig from '../JSSConfig';

const IJSSCore = JSSConfig.getInstance();
const conf = {};
IJSSCore.registerPlugin('elements', 'images', conf);

const images = `
/**
 * 1. Fluid images for responsive purposes.
 * 2. Offset 'alt' text from surrounding copy.
 * 3. Setting 'vertical-align' removes the whitespace that appears under img
 *    elements when they are dropped into a page as-is. Safer alternative to
 *    using display: block;.
 */
img {
  max-width: 100%;          /* [1] */
  font-style: italic;       /* [2] */
  vertical-align: middle;   /* [3] */ 
  }

/**
 * If a 'width' and/or 'height' attribute has been explicitly defined,
 * not make the image fluid.
 */
 
img[width],
  img[height] {
  max-width: none; }
`;


export default images;
