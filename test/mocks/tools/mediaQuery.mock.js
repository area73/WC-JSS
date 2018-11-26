
export const upto600 = `@media (max-width: 600px) {.responsive:before {content: \"to 600px\";}}`;
export const upto600WithMixin = `@media (max-width: 600px) {.responsive:before {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
content: \"to 600px\";}}`;

export const upto34em = `@media (max-width: 34em) {.responsive:before {content: \"to 34em\";}}`;
export const uptoMobile = `@media (max-width: 320px) {.responsive:before {content: \"to mobile\";}}`;
export const uptoCustomNamedBreakpoint = `@media (max-width: 600px) {.responsive:before {content: \"to custom\";}}`;
export const fromMobileAndUp = `@media (min-width: 320px) {.responsive:before {content: \"from mobile and up\";}}`;
export const fromMobileToTablet = `@media (min-width: 320px) and (max-width: 768px) {.responsive:before {content: \"from mobile to tablet\";}}`;
export const upToTabletAndLAndscape = `@media (max-width: 768px) and (orientation: landscape) {.responsive:before {content: \"to tablet and landscape\";}}`;
export const multipleCombine = `@media screen, print and (min-width: 320px) and (max-width: 768px) and (orientation: landscape) {.responsive:before {content: \"to tablet and landscape\";}}`;
export const invertMediaQuery =`@media not screen and (max-width: 768px) {.responsive:before {content: \"will not apply to screen\";}}`;
export const invertMediaQueryError = `
  body:before {
    white-space: pre;
    font-size: 20px;
    color: white;
    background-color: red;
    padding: 40px;
    font-family: monospace;
    display:block;
    content: "Inverting a Media query needs a media Type";
  }`;
