/**
 * Grid-like layout system.
 *
 * The layout object provides us with a column-style layout system. This file
 * contains the basic structural elements, but classes should be complemented
 * with width utilities, for example:
 *
 *   <div class="o-layout">
 *     <div class="o-layout__item  u-1/2">
 *     </div>
 *     <div class="o-layout__item  u-1/2">
 *     </div>
 *   </div>
 *
 * The above will create a two-column structure in which each column will
 * fluidly fill half of the width of the parent. We can have more complex
 * systems:
 *
 *   <div class="o-layout">
 *     <div class="o-layout__item  u-1/1  u-1/3@medium">
 *     </div>
 *     <div class="o-layout__item  u-1/2  u-1/3@medium">
 *     </div>
 *     <div class="o-layout__item  u-1/2  u-1/3@medium">
 *     </div>
 *   </div>
 *
 * The above will create a system in which the first item will be 100% width
 * until we enter our medium breakpoint, when it will become 33.333% width. The
 * second and third items will be 50% of their parent, until they also become
 * 33.333% width at the medium breakpoint.
 *
 * We can also manipulate entire layout systems by adding a series of modifiers
 * to the '.o-layout' block. For example:
 *
 *   <div class="o-layout  o-layout--reverse">
 *
 * This will reverse the displayed order of the system so that it runs in the
 * opposite order to our source, effectively flipping the system over.
 *
 *   <div class="o-layout  o-layout--[right|center]">
 *
 * This will cause the system to fill up from either the centre or the right
 * hand side. Default behaviour is to fill up the layout system from the left.
 *
 * There are plenty more options available to us: explore them below.
 */

import JSSConfig from '../settings/JSSConfig';

const JSS = JSSConfig.getInstance();
const conf = {
  // By default we use the 'font-size: 0;' trick to remove whitespace between
  // items. Set this to true in order to use a markup-based strategy like
  // commenting out whitespace or minifying HTML.
  useMarkupFix: false,
};

JSS.registerPlugin('objects', 'layout', conf);

const markupFix = output => (JSS.objects.layout.useMarkupFix ? '' : output);

const gutterModfiers = spacingUnit => {
  let output = '';
  Object.keys(spacingUnit).forEach(key => {
    output += `
    .o-layout--${key}                   { margin-left: -${spacingUnit[key]}px;}
    .o-layout--${key} > .o-layout__item { padding-left: ${spacingUnit[key]}px;}
    `;
  });
  return output;
};

const layout = ` 

/* Default/mandatory classes
   ========================================================================== */

/**
* 1. Allows us to use the layout object on any type of element.
* 2. We need to defensively reset any box-model properties.
* 3. Use the negative margin trick for multi-row grids:
*    http://csswizardry.com/2011/08/building-better-grid-systems/
*/

.o-layout {
  display: block; /* [1] */
  margin:  0; /* [2] */
  padding: 0; /* [2] */
  list-style: none; /* [1] */
  margin-left: -${JSS.globalSpacing.normal}px; /* [3] */
  ${markupFix('font-size: 0;')}
}

  /**
   * 1. Required in order to combine fluid widths with fixed gutters.
   * 2. Allows us to manipulate grids vertically, with text-level properties,
   *    etc.
   * 3. Default item alignment is with the tops of each other, like most
   *    traditional grid/layout systems.
   * 4. By default, all layout items are full-width (mobile first).
   * 5. Gutters provided by left padding:
   *    http://csswizardry.com/2011/08/building-better-grid-systems/
   * 6. Fallback for old IEs not supporting 'rem' values.
   */

  .o-layout__item {
    box-sizing: border-box; /* [1] */
    display: inline-block; /* [2] */
    vertical-align: top; /* [3] */
    width: 100%; /* [4] */
    padding-left: ${JSS.globalSpacing.normal}px; /* [5] */
    ${markupFix(`
      font-size: ${JSS.globalFontSize}px; /* [6] */
      font-size: 1rem;
    `)}
  }

/* Gutter size modifiers
   ========================================================================== */

${gutterModfiers(JSS.globalSpacing)}

/* Vertical alignment modifiers
   ========================================================================== */

/**
* Align all grid items to the middles of each other.
*/
 
.o-layout--middle > .o-layout__item { vertical-align: middle; }

/**
* Align all grid items to the bottoms of each other.
*/

.o-layout--bottom > .o-layout__item { vertical-align: bottom;} 

/**
* Stretch all grid items of each row to have an equal-height.
* Please be aware that this modifier class doesn’t take any effect in IE9 and
* below and other older browsers due to the lack of 'display: flex' support.
*/

.o-layout--stretch { display: flex; flex-wrap: wrap; }
.o-layout--stretch  > .o-layout__item { display: flex; }
.o-layout--stretch.o-layout--center { justify-content: center; }
.o-layout--stretch.o-layout--right { justify-content: flex-end; }
.o-layout--stretch.o-layout--left {justify-content: flex-start;}

/* Fill order modifiers
   ========================================================================== */
/**
* Fill up the layout system from the centre.
*/

.o-layout--center { text-align: center; }
.o-layout--center > .o-layout__item { text-align: left; }

/**
* Fill up the layout system from the right-hand side.
*/

.o-layout--right { text-align: right; }
.o-layout--right > .o-layout__item { text-align: left;}

/**
* Fill up the layout system from the left-hand side. This will likely only be
* needed when using in conjunction with '.o-layout--reverse'.
*/

.o-layout--left { text-align: left; }
.o-layout--left > .o-layout__item { text-align: left;}

/**
 * Reverse the rendered order of the grid system.
 */

.o-layout--reverse { direction: rtl; }
.o-layout--reverse > .o-layout__item { direction: ltr; }

/* Auto-widths modifier
   ========================================================================== */

/**
 * Cause layout items to take up a non-explicit amount of width.
 */

.o-layout--auto > .o-layout__item { width: auto; }
`;

export default layout;
