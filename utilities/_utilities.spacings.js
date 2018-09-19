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
  "top"         :"-top",
  "right"       :"-right",
  "bottom"      :"-bottom",
  "left"        :"-left",
  "horizontal"  :"-left -right",
  "vertical"    :"-top -bottom",
}


const spacingProperties = ['padding','margin']

const spacingSizes = {
  // null: IJSSCore.global_spacing_unit,
  "-tiny": IJSSCore.global_spacing_unit_tiny,
  "-small":IJSSCore.global_spacing_unit_small,
  "-large": IJSSCore.global_spacing_unit_large,
  "-huge": IJSSCore.global_spacing_unit_huge,
  "-none": 0
}


  spacingProperties.map((spacingProp) => {
    spacingDirections.map ((spacingDir) => {

    })

    `u-${spacingProp}`

  })


    /*
  .u-#{$property-namespace}#{$direction-namespace}#{$size-namespace} {
      {$property}#{$direction}: $size !important;
  }
  */

/*
@each $property-namespace, $property in $inuit-spacing-properties {

  @each $direction-namespace, $direction-rules in $inuit-spacing-directions {

    @each $size-namespace, $size in $inuit-spacing-sizes {

      .u-#{$property-namespace}#{$direction-namespace}#{$size-namespace} {

        @each $direction in $direction-rules {
          #{$property}#{$direction}: $size !important;
        }

      }

    }

  }

}
*/
