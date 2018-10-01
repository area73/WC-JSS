import JSSCore from './JSSCore';
import config from '../JSSrc';


const JSSConfig = (function () {
  let instance;

  const setNewInstance = (newInstane) => { instance = newInstane; };

  const registerPlugin = (type, name, conf) => {
    if (!instance.hasOwnProperty(type)) {
      instance[type] = {};
    }
    const obj = instance[type];
    obj[name] = conf;
    const newInstance = Object.assign({}, obj, instance);
    setNewInstance(newInstance);
  };

  const createInstance = () => {
    // grab JSSrc config if any
    instance = Object.assign({}, JSSCore, config);
    instance.registerPlugin = registerPlugin;
    return instance;
  };

  const getInstance = () => (instance || createInstance());


  return {
    getInstance,
  };
}());

export default JSSConfig;
