/* ==========================================================================
   #HEADINGS
   ========================================================================== */
import IJSSCore from '../settings/_settings.core';
import inuitFontSize from '../tools/_tools.font-size';

/**
 * Simple default styles for headings 1 through 6. Anything more opinionated
 * than simple font-size changes should likely be applied via classes (see:
 * http://csswizardry.com/2016/02/managing-typography-on-large-apps/).
 */

// We have all of our heading font sizes defined here. Passing these pixel
// values into our `inuit-font-size()` mixin will generate a rem-based
// `font-size` with a pixel fallback, as well as generating a `line-height` that
// will sit on our baseline grid.


const headings = `

h1 {
  ${inuitFontSize(IJSSCore.inuit_font_size_h1)};
}

h2 {
  ${inuitFontSize(IJSSCore.inuit_font_size_h2)};
}

h3 {
  ${inuitFontSize(IJSSCore.inuit_font_size_h3)};
}

h4 {
  ${inuitFontSize(IJSSCore.inuit_font_size_h4)};
}

h5 {
  ${inuitFontSize(IJSSCore.inuit_font_size_h5)};
}

h6 {
  ${inuitFontSize(IJSSCore.inuit_font_size_h6)};
}
`;

export default headings;
