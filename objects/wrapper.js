import JSSConfig from '../settings/JSSConfig';
import clearFix from '../tools/clearfix';

const JSS = JSSConfig.getInstance();
const conf = {
  wrapperWidth: 1200,
};
JSS.registerPlugin('objects', 'wrapper', conf);

const wrapper = `
/**
 * Page-level constraining and wrapping elements.
 */
${clearFix('.o-wrapper')}
.o-wrapper {
  padding-right: ${JSS.globalSpacing.normal}px;
  padding-left:   ${JSS.globalSpacing.normal}px;
  margin-right: auto;
  margin-left:  auto;
  max-width: ${JSS.objects.wrapper.wrapperWidth}px;
}
`;

export default wrapper;
