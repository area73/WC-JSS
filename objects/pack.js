import JSSConfig from '../settings/JSSConfig';
const JSS = JSSConfig.getInstance();

import {addModifiers} from '../tools/utils';

const packModfiers = `
    .o-pack--{key} {
      border-spacing: {value}px; 
    }
    `;


const pack = `
/**
 * The pack object simply causes any number of elements pack up horizontally to
 * automatically fill an equal, fluid width of their parent.
 *
 * 1. Fill all available space.
 * 2. Remove any leftover styling from lists.
 * 3. Cause children to be automatically equally sized.
 */
.o-pack {
  width: 100%;          /* [1] */
  margin-left: 0;       /* [2] */
  display: table;
  table-layout: fixed;  /* [3] */ 
}

/**
 * 1. Cause children to adopt table-like structure.
 * 2. Default item alignment is with the tops of each other.
 */
.o-pack__item {
  display: table-cell; /* [1] */
  vertical-align: top; /* [2] */
}

/* Vertical alignment variants
   ====================================================================== */
.o-pack--middle > .o-pack__item   { vertical-align: middle; }
  .o-pack--bottom > .o-pack__item { vertical-align: bottom; }

/* Unequal-width items
   ========================================================================== */
.o-pack--auto { table-layout: auto; }

/* Size variants
   ========================================================================== */
${addModifiers(packModfiers)}

/* Reversed order packs
   ========================================================================== */
.o-pack--reverse                  { direction: rtl; }
.o-pack--reverse > .o-pack__item  { direction: ltr; }
`;


export default pack;