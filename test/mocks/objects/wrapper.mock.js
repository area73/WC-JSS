import clearFix from '../../../tools/clearfix';
import IJSSCore from '../../../settings/JSSCore';

const wrapperMock = `
/**
 * Page-level constraining and wrapping elements.
 */

    .o-wrapper:after {
      content: "" !important;
      display: block !important;
      clear: both !important;
    }
.o-wrapper {
  padding-right: 24px;
  padding-left:   24px;
  margin-right: auto;
  margin-left:  auto;
  max-width: 1200px;
}
`;


export default wrapperMock;
