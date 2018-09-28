// /* ========================================================================
//   #CORE
//   ======================================================================== */

const IJSSCore = {

  // This core file sets up  most important setup variables. They
  // underpin a lot of how the framework functions and should be modified and
  // preconfigured with caution.

  // Baseline grid lines height.
  // Every spacing metric should be based on this.
  globalBaseline: 6,

  // How many grid lines should our spacing unit variants span?
  // Each value should be an unitless integer.
  globalSpacingUnitFactor: {
    none: 0,
    tiny: 1,
    small: 2,
    normal: 4,
    large: 8,
    huge: 16,
  },
  // Spacing values are determined based on your project’s global baseline grid.
  // It is not recommended that you modify these following variables
  // (it can break your vertical rhythm), but if you need to, you can.
  get globalSpacingUnit() {
    const spacing = new Object();
    Object.keys(IJSSCore.globalSpacingUnitFactor).forEach((key) => {
      spacing[key] = IJSSCore.globalSpacingUnitFactor[key] * IJSSCore.globalBaseline;
    });
    return spacing;
  },


  // Base typographical styles.
  globalFontSize: 16,
  get globalLineHeight() { return IJSSCore.globalSpacingUnit.normal; },

  globalRadius: 3,

  // transitions & animations
  globalTransitionParams: {
    duration: '300ms',
    delay: '0ms',
    property: 'all',
    timingFunction: 'ease-in-out',
  },
  get globalTransition() { return `${IJSSCore.globalTransitionParams.property} ${IJSSCore.globalTransitionParams.duration} ${IJSSCore.globalTransitionParams.timingFunction} ${IJSSCore.globalTransitionParams.delay}`; },

  fontSizeHeading: {
    h1: 36,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 18,
    h6: 16,
  },
};


// TODO: Check that the chosen font rules are pixel numbers.
/*
@each $_inuit-font-globals in
      global-font-size
      global-line-height {

  @if (type-of($_inuit-font-globals) == number) {

    @if (unit($_inuit-font-globals) != "px") {
      @error "`#{$_inuit-font-globals}` needs to be a pixel value.";
    }

  } @else {
    @error "`#{$_inuit-font-globals}` needs to be a number.";
  }

}
*/

// TODO: Check that the chosen size factors are unitless, integer numbers.
/*
@each $_inuit-spacing-unit in
      global-spacing-unit-factor-tiny
      global-spacing-unit-factor-small
      global-spacing-unit-factor-large
      global-spacing-unit-factor-huge {

  @if (type-of($_inuit-spacing-unit) == number) {

    @if (unitless($_inuit-spacing-unit) == false) {
      @error "`#{$_inuit-spacing-unit}` needs to be unitless.";
    }

    @if ($_inuit-spacing-unit != ceil($_inuit-spacing-unit)) {
      @error "`#{$_inuit-spacing-unit}` needs to be an integer.";
    }

  } @else {
    @error "`#{$_inuit-spacing-unit}` needs to be a number.";
  }

}
*/


export default IJSSCore;
