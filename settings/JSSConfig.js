import JSSCore from './JSSCore';

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

  const createInstance = (cfg) => {
    instance = cfg ? Object.assign({}, JSSCore, cfg) : JSSCore;
    instance.registerPlugin = registerPlugin;
    return instance;
  };

  const getInstance = cfg => (instance || createInstance(cfg));

  return {
    getInstance,
  };
}());

export default JSSConfig;
