// /* ========================================================================
//   #CORE
//   ======================================================================== */

const IJSSCore = {

  // This core file sets up inuitJSS’ most important setup variables. They
  // underpin a lot of how the framework functions and should be modified and
  // preconfigured with caution.

  // Baseline grid lines height.
  // Every spacing metric should be based on this.

  global_baseline: 6,

  // How many grid lines should our spacing unit variants span?
  // Each value should be an unitless integer.

  global_spacing_unit_factor_tiny: 1, // 6px
  global_spacing_unit_factor_small: 2, // 12px
  global_spacing_unit_factor: 4, // 24px
  global_spacing_unit_factor_large: 8, // 48px
  global_spacing_unit_factor_huge: 16, // 96px

  // Spacing values are determined based on your project’s global baseline grid.
  // It is not recommended that you modify these following variables
  // (it can break your vertical rhythm), but if you need to, you can.

  get global_spacing_unit() { return IJSSCore.global_baseline * IJSSCore.global_spacing_unit_factor; },
  get global_spacing_unit_small() { return IJSSCore.global_baseline * IJSSCore.global_spacing_unit_factor_small; },
  get global_spacing_unit_large() { return IJSSCore.global_baseline * IJSSCore.global_spacing_unit_factor_large; },
  get global_spacing_unit_tiny() { return IJSSCore.global_baseline * IJSSCore.global_spacing_unit_factor_tiny; },
  get global_spacing_unit_huge() { return IJSSCore.global_baseline * IJSSCore.global_spacing_unit_factor_huge; },

  // Base typographical styles.
  global_font_size: 16,
  get global_line_height() { return IJSSCore.global_spacing_unit; },

  global_radius: 3,
  // transitions & animations
  global_trainsitio_duration: '300ms',
  global_transition_delay: '0ms',
  global_transition_property: 'all',
  global_transition_timing_function: 'ease-in-out',
  get global_transition() { return `${IJSSCore.global_transition_property} ${IJSSCore.global_trainsitio_duration} ${IJSSCore.global_transition_timing_function} ${IJSSCore.global_transition_delay}`; },
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
