// Based on https://github.com/sass-mq/sass-mq

/**
 *
 * @param from {number || String } From: this breakpoint (inclusive)
 * @param until {number || String } Until: that breakpoint (exclusive)
 * @param and
 * @param mediaType
 * @param breakpoints
 * @param props
 */
const mq = ({from,until,and,mediaType,breakpoints}, props) => {

};

{
  $min-width: 0;
  $max-width: 0;
  $media-query: '';

  // From: this breakpoint (inclusive)
@if $from {
  @if type-of($from) == number {
      $min-width: mq-px2em($from);
    } @else {
      $min-width: mq-px2em(mq-get-breakpoint-width($from, $breakpoints));
    }
  }

  // Until: that breakpoint (exclusive)
@if $until {
  @if type-of($until) == number {
      $max-width: mq-px2em($until);
    } @else {
      $max-width: mq-px2em(mq-get-breakpoint-width($until, $breakpoints)) - .01em;
    }
  }

  // Responsive support is disabled, rasterize the output outside @media blocks
  // The browser will rely on the cascade itself.
  /*  BOOGIE DON't need it
    @if $responsive == false {
      $static-breakpoint-width: mq-get-breakpoint-width($static-breakpoint, $breakpoints);
      $target-width: mq-px2em($static-breakpoint-width);

      // Output only rules that start at or span our target width
      @if (
        $and == false
              and $min-width <= $target-width
              and (
                  $until == false or $max-width >= $target-width
              )
              and $media-type != 'print'
      ) {
        @content;
      }
    }
  */
  // Responsive support is enabled, output rules inside @media queries
  // @else {
@if $min-width != 0 { $media-query: '#{$media-query} and (min-width: #{$min-width})'; }
@if $max-width != 0 { $media-query: '#{$media-query} and (max-width: #{$max-width})'; }
@if $and            { $media-query: '#{$media-query} and #{$and}'; }

  // Remove unnecessary media query prefix 'all and '
@if ($media-type == 'all' and $media-query != '') {
    $media-type: '';
    $media-query: str-slice(unquote($media-query), 6);
  }

  @media #{$media-type + $media-query} {
  @content;
  }
  // }
}
