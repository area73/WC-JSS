import JSSConfig from '../JSSConfig';
const IJSSCore = JSSConfig.getInstance();


const roundNumber = (num, dec) => Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);



var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
print(newstr);

const replaceReg = (regExpStr, key, value) => {
  return regExpStr.replace(/\{key\}/gi, key).replace(/\{value\}/gi, value);

};

const addModifiers = (regExpStr, modifiers = IJSSCore.globalSpacingUnit) => {
  let output = '';
  Object.keys(modifiers).forEach((key) => {
    output += replaceReg(regExpStr, key, modifiers[key] );
  });
  return output;
};

export { roundNumber, addModifiers };


