
const fontFamilyMock = `
  :host { font-family: "INGMe", arial, sans-serif !important; }
`;

const fontFaceMock = `
      @font-face {
        font-family: "INGMe";
        font-style: normal;
        font-weight: bold;
        src: url("/assets/fonts/INGMe/Bold/INGMeWeb-Bold.woff") format("woff"),url("/assets/fonts/INGMe/Bold/INGMeWeb-Bold.woff2") format("woff2"),url("/assets/fonts/INGMe/Bold/INGMeWeb-Bold.svg#INGMe") format("svg"),url("/assets/fonts/INGMe/Bold/INGMeWeb-Bold.ttf") format("truetype")
      }`;



export {fontFaceMock, fontFamilyMock};
