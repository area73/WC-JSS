import JSSConfig from '../JSSConfig';

const IJSSCore = JSSConfig.getInstance();


const roundNumber = (num, dec) => Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);



const replaceReg = (regExpStr, key, value) => {


}

const spacing = (regExpStr) => {
  let output = '';
  Object.keys(IJSSCore.globalSpacingUnit).forEach((key) => {
    output += replaceReg(regExpStr, key, IJSSCore.globalSpacingUnit[key] );
  });
  return output;
};

export { roundNumber };


