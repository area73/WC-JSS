import clearFix from '../tools/clearfix';
import JSSConfig from '../settings/JSSConfig';
import {addModifiers} from '../tools/utils';
const JSS = JSSConfig.getInstance();

const mediaModfiers =`
  .o-media--{key} > .o-media__img { margin-right: {value}px; }
  .o-media--{key}.o-media--reverse > .o-media__img {
    margin-right: 0;
    margin-left: {value}px; 
  }
`;

const media = `
/**
 * Place any image- and text-like content side-by-side, as per:
 * http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code
 */
 
${clearFix('.o-media')}
.o-media__img {
  float: left;
  margin-right: ${JSS.globalSpacing.normal}px; 
}
.o-media__img > img {
    display: block; 
}

.o-media__body {
  overflow: hidden;
  display: block; 
}
  .o-media__body,
  .o-media__body > :last-child {
    margin-bottom: 0; 
}
  

/* Size variants
   ========================================================================== */

/**
 * Modify the amount of space between our image and our text. We also have
 * reversible options for all available sizes.
 */
 
 ${addModifiers(mediaModfiers)}
 
/* Reversed media objects
   ========================================================================== */

.o-media--reverse {

  > .o-media__img {
    float: right;
    margin-right: 0;
    margin-left: ${JSS.globalSpacing.normal}px;
  }
}
`;

export default media;
