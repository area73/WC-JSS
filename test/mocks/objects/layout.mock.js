const layoutMock = `

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
  margin-left: -24px; /* [3] */
  font-size: 0;
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
    padding-left: 24px; /* [5] */
    
      font-size: 16px; /* [6] */
      font-size: 1rem;
    
  }

/* Gutter size modifiers
   ========================================================================== */

.o-layout--flush                      {margin-left: 0;}
.o-layout--flush  > .o-layout__item   {padding-left: 0;}

    .o-layout--none                   { margin-left: -0px;}
    .o-layout--none > .o-layout__item { margin-left: 0px;}
    
    .o-layout--tiny                   { margin-left: -6px;}
    .o-layout--tiny > .o-layout__item { margin-left: 6px;}
    
    .o-layout--small                   { margin-left: -12px;}
    .o-layout--small > .o-layout__item { margin-left: 12px;}
    
    .o-layout--normal                   { margin-left: -24px;}
    .o-layout--normal > .o-layout__item { margin-left: 24px;}
    
    .o-layout--large                   { margin-left: -48px;}
    .o-layout--large > .o-layout__item { margin-left: 48px;}
    
    .o-layout--huge                   { margin-left: -96px;}
    .o-layout--huge > .o-layout__item { margin-left: 96px;}
    

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

export default layoutMock;
