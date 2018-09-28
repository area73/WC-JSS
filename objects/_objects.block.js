/* ==========================================================================
   #BLOCK
   ========================================================================== */

/**
 * Stacked imageMock-with-text object. A simple abstraction to cover a very commonly
 * occurring design pattern.
 */

import IJSSCore from '../settings/JSSCore';

const block = `

.o-block {
  display: block;
  text-align: center;
}

  .o-block__img {
    margin-bottom: ${IJSSCore.global_spacing_unit};


    /* Size variants
       ====================================================================== */

    .o-block--flush > & {
      margin-bottom: 0;
    }

    .o-block--tiny > & {
      margin-bottom: ${IJSSCore.global_spacing_unit_tiny};
    }

    .o-block--small > & {
      margin-bottom: ${IJSSCore.global_spacing_unit_small};
    }

    .o-block--large > & {
      margin-bottom: ${IJSSCore.global_spacing_unit_large};
    }

    .o-block--huge > & {
      margin-bottom: ${IJSSCore.global_spacing_unit_huge};
    }

  }

  .o-block__body {
    display: block;
  }

/* Alignment variants
   ========================================================================== */

.o-block--right {
  text-align: right;
}

.o-block--left {
  text-align: left;
}
`;

export default block;
