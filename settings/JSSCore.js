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
  get globalSpacing() {
    const spacing = new Object();
    Object
    .keys(IJSSCore.globalSpacingUnitFactor)
    .forEach((key) => {
      spacing[key] = IJSSCore.globalSpacingUnitFactor[key] * IJSSCore.globalBaseline;
    });
    return spacing;
  },

  // Base typographical styles.
  globalFontSize: 16,
  fontSizeHeading: {
    h1: 36,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 18,
    h6: 16,
  },
  get globalFontFamily() {return "'INGMe', arial, sans-serif"},

  get globalLineHeight() { return IJSSCore.globalSpacing.normal; },

  globalRadius: 3,
  // transitions & animations
  globalTransitionParams: {
    duration: '300ms',
    delay: '0ms',
    property: 'all',
    timingFunction: 'ease-in-out',
  },
  get globalTransition() { return `${IJSSCore.globalTransitionParams.property} ${IJSSCore.globalTransitionParams.duration} ${IJSSCore.globalTransitionParams.timingFunction} ${IJSSCore.globalTransitionParams.delay}`; },

  breakpoints: {
    mobile: 320,
    tablet: 768,
    desktop: 948,
    wide: 1164,
  },
  colors: {
    white : '#fff',
    black : '#000',
    gray50: '#FAFAFA',
    gray100: '#F5F5F5',
    gray200: '#EEEEEE',
    gray300: '#E0E0E0',
    gray400: '#BDBDBD',
    gray500: '#9E9E9E',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    gray900: '#212121',
    primaryLightest: '#BBDEFB',
    primaryLighter: '#90CAF9',
    primaryLight:'#64B5F6',
    primary :'#42A5F5',
    primaryDark: '#2196F3',
    primaryDarker: '#1E88E5',
    primaryDarkest: '#1976D2',
    secondaryLightest: '#B2DFDB',
    secondaryLighter: '#80CBC4',
    secondaryLight:'#26A69A',
    secondary :'#009688',
    secondaryDark: '#00897B',
    secondaryDarker: '#00796B',
    secondaryDarkest: '#00695C',
    // GENERIC
    alert : '#D0021B',
    warn : '#FF6200',
    info : '#349651',
  }
};
export default IJSSCore;
