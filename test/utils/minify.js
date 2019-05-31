import { replace, trim } from 'ramda';

const replaceWhitespace = replace(/\s+/g, ' ');
const minify = str => trim(replaceWhitespace(str));

export default minify;
