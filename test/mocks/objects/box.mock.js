const boxMock = `
/**
 * The box object simply boxes off content. Extend with cosmetic styles in the
 * Components layer.
 *
 * 1. So we can apply the '.o-box' class to naturally-inline elements.
 */


    o-box:after {
      content: "" !important;
      display: block !important;
      clear: both !important;
    }
.o-box {
  display: block; /* [1] */
  padding: [object Object]px;
  }
  .o-box > :last-child {
    margin-bottom: 0;
  }


/* Size variants
   ========================================================================== */

.o-box--none {
  padding: 0px;
}


.o-box--tiny {
  padding: 6px;
}


.o-box--small {
  padding: 12px;
}


.o-box--normal {
  padding: 24px;
}


.o-box--large {
  padding: 48px;
}


.o-box--huge {
  padding: 96px;
}


`;


export default boxMock;
