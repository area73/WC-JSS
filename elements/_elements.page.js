/* ==========================================================================
   #PAGE
   ========================================================================== */
import IJSSCore from '../settings/_settings.core';

const page = `
/**
 * Simple page-level setup.
 *
 * 1. Set the default 'font-size' and 'line-height' for the entire project,
 *    sourced from our default variables. The 'font-size' is calculated to exist
 *    in ems, the 'line-height' is calculated to exist unitlessly.
 * 2. Force scrollbars to always be visible to prevent awkward ‘jumps’ when
 *    navigating between pages that do/do not have enough content to produce
 *    scrollbars naturally.
 * 3. Ensure the page always fills at least the entire height of the viewport.
 */

html {
  font-size: (${IJSSCore.global_font_size / 16}em; /* [1] */
  line-height: ${IJSSCore.global_line_height / IJSSCore.global_font_size}; /* [1] */
  overflow-y: scroll; /* [2] */
  min-height: 100%; /* [3] */
}`;

export default page;
