import IJSSCore from '../settings/_settings.core';
/* ==========================================================================
   #SPACINGS
   ========================================================================== */

/**
 * Utility classes to put specific spacing values onto elements. The below loop
 * will generate us a suite of classes like:
 *
 *   .u-margin-top {}
 *   .u-padding-left-large {}
 *   .u-margin-right-small {}
 *   .u-padding {}
 *   .u-padding-right-none {}
 *   .u-padding-horizontal {}
 *   .u-padding-vertical-small {}
 */

const spacingDirections = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  horizontal: ['left', 'right'],
  vertical: ['top', 'bottom'],
};


const spacingProperties = ['padding', 'margin'];

const spacingSizes = {
  '': IJSSCore.global_spacing_unit,
  tiny: IJSSCore.global_spacing_unit_tiny,
  small: IJSSCore.global_spacing_unit_small,
  large: IJSSCore.global_spacing_unit_large,
  huge: IJSSCore.global_spacing_unit_huge,
  none: 0,
};


const propPrint = (spacingDir, spacingProp, spacingSize) => (typeof spacingDirections[spacingDir] === 'object'
  ? spacingDirections[spacingDir].reduce((prev, next) => `${prev}${spacingProp}-${next}: ${spacingSizes[spacingSize]}px;\n`, '')
  : `${spacingProp}-${spacingDirections[spacingDir]}: ${spacingSizes[spacingSize]}px !important;`);

const spacing = spacingProperties
  .reduce((prev, spacingProp) => prev + Object.keys(spacingDirections)
    .reduce((prev, spacingDir) => prev + Object.keys(spacingSizes)
      .reduce((prev, spacingSize) => `${prev}
            .u-${spacingProp}-${spacingDir}${spacingSize && '-'}${spacingSize && spacingSize}{
              ${propPrint(spacingDir, spacingProp, spacingSize)}
            }`, ''), ''), '');

export default spacing;
