const blockMock = `
.o-block { display: block; text-align: center; }
.o-block__img { margin-bottom: [object Object]px; }
/* Size variants
   ====================================================================== */

  .o-block__img .o-block--none > & { margin-bottom: 0px; }

  .o-block__img .o-block--tiny > & { margin-bottom: 6px; }

  .o-block__img .o-block--small > & { margin-bottom: 12px; }

  .o-block__img .o-block--normal > & { margin-bottom: 24px; }

  .o-block__img .o-block--large > & { margin-bottom: 48px; }

  .o-block__img .o-block--huge > & { margin-bottom: 96px; }
       
.o-block__body { display: block;}
/* Alignment variants
   ========================================================================== */
.o-block--right { text-align: right; }
.o-block--left { text-align: left; }
`;

export default blockMock;
