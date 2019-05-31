/**
 * A list of aspect ratios that get generated as modifier classes.
 * You should predefine it with only the ratios and names your project needs.
 * The map keys are the strings used in the generated class names, and they can
 * follow any convention, as long as they are properly escaped strings. i.e.:
 *   $inuit-ratios: (
 *     "2\\:1"         : (2:1),
 *     "4-by-3"        : (4:3),
 *     "full-hd"       : (16:9),
 *     "card-imageMock"    : (2:3),
 *     "golden-ratio"  : (1.618:1) -> non-integers are okay
 *   ) !default;
 */

import JSSConfig from '../settings/JSSConfig';

const JSS = JSSConfig.getInstance();
const conf = {
  ratioUnits: ['2:1', '4:3', '16:9'],
};
JSS.registerPlugin('objects', 'ratio', conf);

const outputName = name =>
  `${name.substring(0, name.indexOf(':'))}\\${name.substring(
    name.indexOf(':'),
    name.length,
  )}`;
const tall = dim => dim.substring(dim.indexOf(':') + 1, dim.length);
const wide = dim => dim.substring(0, dim.indexOf(':'));

const ratioMods = ratios =>
  ratios.reduce(
    (prev, actual) => ` ${prev}
    .o-ratio--${outputName(actual)}:before {
      padding-bottom:  ${(tall(actual) / wide(actual)) * 100}%;
    }`,
    '',
  );

const ratio = `
/**
 * Create ratio-bound content blocks, to keep media (e.g. images, videos) in
 * their correct aspect ratios.
 *
 * http://alistapart.com/article/creating-intrinsic-ratios-for-video
 *
 * 1. Default is a 1:1 ratio (i.e. a perfect square).
 */

.o-ratio {
  position: relative;
  display: block;

  &:before {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: 100%; /* [1] */
  }

}

  .o-ratio__content,
  .o-ratio > iframe,
  .o-ratio > embed,
  .o-ratio > object {
    position: absolute;
    top:    0;
    bottom: 0;
    left:   0;
    height: 100%;
    width:  100%;
  }

/* Ratio variants.
   ========================================================================== */

/**
 * Generate a series of ratio classes to be used like so:
 *
 *   <div class="o-ratio  o-ratio--golden-ratio">
 *
 */


${ratioMods(JSS.objects.ratio.ratioUnits)}

/* Contain modifier.
   ========================================================================== */

/**
 * Only works with image content.
 * Contains the image to the boundaries, without cropping or stretching it.
 */

.o-ratio--img-contain > .o-ratio__content:before {
    height: auto;
    margin: auto;
    max-height: 100%;
    max-width: 100%;
    width: auto;
  }

}
`;

export default ratio;
