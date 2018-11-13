import { configure, addDecorator } from '@storybook/polymer';
import { withNotes } from '@storybook/addon-notes';
import { setConsoleOptions } from '@storybook/addon-console';
import { configureViewport } from '@storybook/addon-viewport';

// Console
setConsoleOptions({panelExclude: []});
// notes
addDecorator(withNotes);
// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);




