import IJSSCore from '../settings/_settings.core';
/* ==========================================================================
   #PACK
   ========================================================================== */

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
  width: 100%; /* [1] */
  margin-left: 0; /* [2] */
  display: table;
  table-layout: fixed; /* [3] */
}

  /**
   * 1. Cause children to adopt table-like structure.
   * 2. Default item alignment is with the tops of each other.
   */

  .o-pack__item {
    display: table-cell; /* [1] */
    vertical-align: top; /* [2] */


    /* Vertical alignment variants
       ====================================================================== */

    .o-pack--middle > & {
      vertical-align: middle;
    }

    .o-pack--bottom > & {
      vertical-align: bottom;
    }
  }

/* Unequal-width items
   ========================================================================== */

.o-pack--auto {
  table-layout: auto;
}


/* Size variants
   ========================================================================== */

.o-pack--tiny {
  border-spacing: ${IJSSCore.global_spacing_unit_tiny};
}

.o-pack--small {
  border-spacing:  ${IJSSCore.global_spacing_unit_small};
}

.o-pack--default {
  border-spacing:  ${IJSSCore.global_spacing_unit};
}

.o-pack--large {
  border-spacing:  ${IJSSCore.global_spacing_unit_large};
}

.o-pack--huge {
  border-spacing:  ${IJSSCore.global_spacing_unit_huge};
}


/* Reversed order packs
   ========================================================================== */

.o-pack--reverse {
  direction: rtl;

  > .o-pack__item {
    direction: ltr;
  }

}
`;


export default pack;
