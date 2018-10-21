// Based on "Media Queries with superpowers " https://github.com/sass-mq/sass-mq

import JSSConfig from '../settings/JSSConfig';
const conf = {};
const JSS = JSSConfig.getInstance();
JSS.registerPlugin('tools', 'mediaQuery', conf);

/**
 *
 * @param input {number || string} the measure that we want to evaluate
 * @param names {object} the key value pair object with the named measures
 * @returns {string}
 * @desc we pass an input that can be a number in which case we return the number and add px
 * as a unit of measure, or string.
 * If it is a string then we check if the name matches our key value object and return
 * the value + 'px' other ways we return the string
 */
const matchType = (input, names) => {
  return (typeof input === 'string')
    ? names.hasOwnProperty(input) ? names[input]+'px' : input
    : input + 'px';
};

const logicalConcat = (item) => item && (' and ' + item );
const addConstrains = (...constrains) =>
  constrains.reduce(
    (prev,curr) => prev && curr && (prev + logicalConcat(curr))
      || (curr && curr || prev),
    '') ;

/**
 * @param invert { boolean } default to false.
 *        If true it will invert query's meaning by applying the 'not' operator
 * @param selector any kind of selector (tag,class, id) to include inside the media query
 * @param from {number || String } From: this breakpoint (inclusive)
 * @param upTo {number || String } Until: that breakpoint (exclusive)
 * @param customDirective {String} custom directive like 'orientation: landscape' to be included
 * @param mediaType {String } media to be affected ie: screen , print, etc
 * @param breakpoints {object} @optional same use as  global breakpoints  it will add new
 *        namings to defaults global. Do not modify global breakpoints only add others on the
 *        functions scope (no side effect)
 * @param props { Array }  properties to been apply inside a media query
 */
const mq = ({invert = false, from, upTo, customDirective, mediaType, selector = '*', breakpoints}, mixinProps) => {
  const oBreakpoints = breakpoints ? Object.assign({}, JSS.breakpoints, breakpoints) : JSS.breakpoints;
  const outNot = invert && mediaType && 'not ' || ''; // TODO: throw an exception in case invert == true & mediaType == false
  // TODO: create a validator
  const media = '@media ' + outNot;
  const outMediaType = mediaType && ` ${mediaType} ` || '';
  const outUpTo = upTo && `(max-width: ${matchType(upTo, oBreakpoints)})` || '';
  const outFrom = from && `(min-width: ${matchType(from, oBreakpoints)})` || '';
  const outCustomDirective = customDirective || '';
  const initBlock = ` {`;
  const outSelector = selector + ' {';
  const content = mixinProps.reduce((item, prev ) => prev + item , '');
  const endBlock = '}}';
  return media
    + addConstrains(outMediaType , outFrom  , outUpTo, outCustomDirective)
    + initBlock
    + outSelector
    + content
    + endBlock;
};

export default mq;
