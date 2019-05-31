import JSSConfig from '../settings/JSSConfig';

const JSS = JSSConfig.getInstance();
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
JSS.registerPlugin('utilities', 'spacing', conf);

const propPrint = (spacingDir, spacingProp, spacingSize) =>
  typeof JSS.utilities.spacing.spacingDirections[spacingDir] === 'object'
    ? JSS.utilities.spacing.spacingDirections[spacingDir].reduce(
        (prev, next) =>
          `${prev}${spacingProp}-${next}: ${
            JSS.globalSpacing[spacingSize]
          }px;\n`,
        '',
      )
    : `${spacingProp}-${JSS.utilities.spacing.spacingDirections[spacingDir]}: ${
        JSS.globalSpacing[spacingSize]
      }px !important;`;

const spacing = JSS.utilities.spacing.spacingProperties.reduce(
  (acc, spacingProp) =>
    acc +
    Object.keys(JSS.utilities.spacing.spacingDirections).reduce(
      (prev, spacingDir) =>
        prev +
        Object.keys(JSS.globalSpacing).reduce(
          (last, spacingSize) => `${last}
            .u-${spacingProp}-${spacingDir}${spacingSize && '-'}${spacingSize}{
              ${propPrint(spacingDir, spacingProp, spacingSize)}
            }`,
          '',
        ),
      '',
    ),
  '',
);

export default spacing;
