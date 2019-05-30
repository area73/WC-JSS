import JSSConfig from '../settings/JSSConfig';
const IJSSCore = JSSConfig.getInstance();

const roundNumber = (num, dec) => Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);

const replaceReg = (regExpStr, key, value) => {
  return regExpStr.replace(/\{key\}/gi, key).replace(/\{value\}/gi, value);

};

const addModifiers = (regExpStr, modifiers = IJSSCore.globalSpacing) => {
  let output = '';
  Object.keys(modifiers).forEach((key) => {
    output += replaceReg(regExpStr, key, modifiers[key] );
  });
  return output;
};

export { roundNumber, addModifiers };
