import JSSConfig from '../settings/JSSConfig';

const JSS = JSSConfig.getInstance();
const conf = {
  rootEl: null,
  globalFontFamily: '"INGMe", arial, sans-serif',
  fontFace: [
    {
      fontFamily: '"INGMe"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      src: [
        'url("/assets/fonts/INGMe/Bold/INGMeWeb-Bold.woff") format("woff")',
        'url("/assets/fonts/INGMe/Bold/INGMeWeb-Bold.woff2") format("woff2")',
        'url("/assets/fonts/INGMe/Bold/INGMeWeb-Bold.svg#INGMe") format("svg")',
        'url("/assets/fonts/INGMe/Bold/INGMeWeb-Bold.ttf") format("truetype")',
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
