
import JSSConfig from '../JSSConfig';

const IJSSCore = JSSConfig.getInstance();
const conf = {
  spacingProperties: ['padding', 'margin'],
  spacingDirections: {
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
    horizontal: ['left', 'right'],
    vertical: ['top', 'bottom'],
  },
};
IJSSCore.registerPlugin('utilities', 'spacing', conf);

const propPrint = (spacingDir, spacingProp, spacingSize) => (typeof IJSSCore.utilities.spacing.spacingDirections[spacingDir] === 'object'
  ? IJSSCore.utilities.spacing.spacingDirections[spacingDir].reduce((prev, next) => `${prev}${spacingProp}-${next}: ${IJSSCore.globalSpacingUnit[spacingSize]}px;\n`, '')
  : `${spacingProp}-${IJSSCore.utilities.spacing.spacingDirections[spacingDir]}: ${IJSSCore.globalSpacingUnit[spacingSize]}px !important;`);

const spacing = IJSSCore.utilities.spacing.spacingProperties
  .reduce((prev, spacingProp) => prev + Object.keys(IJSSCore.utilities.spacing.spacingDirections)
    .reduce((prev, spacingDir) => prev + Object.keys(IJSSCore.globalSpacingUnit)
      .reduce((prev, spacingSize) => `${prev}
            .u-${spacingProp}-${spacingDir}${spacingSize && '-'}${spacingSize}{
              ${propPrint(spacingDir, spacingProp, spacingSize)}
            }`, ''), ''), '');

export default spacing;
