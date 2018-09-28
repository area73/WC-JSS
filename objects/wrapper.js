import JSSConfig from '../JSSConfig';
import clearFix from '../tools/clearfix';

const IJSSCore = JSSConfig.getInstance();
const conf = {
  wrapperWidth: 1200,
};
IJSSCore.registerPlugin('objects', 'wrapper', conf);

const wrapper = `
/**
 * Page-level constraining and wrapping elements.
 */
${clearFix('.o-wrapper')}
.o-wrapper {
  padding-right: ${IJSSCore.globalSpacingUnit.normal}px;
  padding-left:   ${IJSSCore.globalSpacingUnit.normal}px;
  margin-right: auto;
  margin-left:  auto;
  max-width: ${IJSSCore.objects.wrapper.wrapperWidth}px;
}
`;

export default wrapper;
