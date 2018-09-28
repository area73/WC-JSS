import JSSCore from './settings/JSSCore';


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
    instance = Object.assign({}, JSSCore);
    instance.registerPlugin = registerPlugin;
    return instance;
  };

  const getInstance = () => (instance || createInstance());


  return {
    getInstance,
  };
}());

export default JSSConfig;
