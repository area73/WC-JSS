///* ========================================================================
//   #FONT-SIZE
//   ======================================================================== */

// Generates a rem font-size (with pixel fallback) and a baseline-compatible
// unitless line-height from a pixel font-size value. Basic usage is simply:
//
//   @include inuit-font-size(18px);
//
// You can force a specific line-height by passing it as the second argument:
//
//   @include inuit-font-size(16px, 1);
//
// You can also modify the line-height by increments, while staying in the
// baseline grid, by setting the `$modifier` parameter. It takes a positive
// or negative integer, and it will add or remove "lines" to the  generated
// line-height. This is the recomended way to do it, unless you really need
// an absolute value. i.e.:
//
//   // add 2 lines:
//   @include inuit-font-size(24px, $modifier: +2);
//
//   // subtract 1 line:
//   @include inuit-font-size(24px, $modifier: -1);

import IJSSCore from '../settings/_settings.core'

const inuitFontSize = (fontSize, lineHeight = 'auto', modifier = 0, important = false) => {

  if (typeof fontSize !== 'Number') {
    // error
  }

  const importantValue = important ? '!important' : null;

  let output = `
    font-size: ${fontSize} ${importantValue};
    font-size: ${(fontSize / IJSSCore.global_font_size)}rem ${importantValue};
  `

  if (lineHeight === 'auto') {
    // Define how many grid lines each text line should span.
    // By default, we set it to the minimum number of lines necessary
    // in order to contain the defined font-size, +1 for some breathing room.
    // This can be modified with the `$modifier` parameter.
    let lines = Math.ceil(fontSize/IJSSCore.global_baseline) + modifier + 1;
    let lineHeight = lines * IJSSCore.global_baseline;
    output += `
      line-height: ${lineHeight / fontSize} ${importantValue};
    `;
  }  else {
    if (typeof lineHeight ==='Number'
      || lineHeight === 'inherit'
      || lineHeight === 'normal'){
      output +=`
        line-height: ${lineHeight} ${importantValue};
      `
    } else if (lineHeight !== 'none' && lineHeight !== false) {
      // error
    }
  }
}
