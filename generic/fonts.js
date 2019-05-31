import JSSConfig from '../settings/JSSConfig';

const JSS = JSSConfig.getInstance();
const conf = {
  rootEl: null,
  globalFontFamily: '"Montserrat", arial, sans-serif',
  fontFace: [
    {
      fontFamily: '"Montserrat"',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: [
        'url("/assets/fonts/montserrat/MontserratAlternates-Regular.woff2") format("woff2")',
      ],
    },
  ],
};
JSS.registerPlugin('generic', 'fonts', conf);

const fontFace = font => {
  const fontFaceGroup = font || JSS.generic.fonts.fontFace;
  return fontFaceGroup.reduce(
    (prev, next) =>
      `${prev}
      @font-face {
        font-family: ${next.fontFamily};
        font-style: ${next.fontStyle};
        font-weight: ${next.fontWeight};
        src: ${next.src.toString()}
      }`,
    '',
  );
};

const fontFamily = `
  ${JSS.generic.fonts.rootEl || JSS.globalRoot} { font-family: ${
  JSS.generic.fonts.globalFontFamily
} !important; }
`;

export { fontFamily, fontFace };
