import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/index.js');
  require('../stories/highlighter-1.js');
  require('../stories/highlighter-2.js');
  require('../stories/highlighter-3.js');
  require('../stories/selector.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
