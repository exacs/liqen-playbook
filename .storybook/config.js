import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/index.js');
  require('../stories/highlighter-1.js');
  require('../stories/highlighter-2.js');
  require('../stories/highlighter-3.js');
  require('../stories/tagger.js');
  require('../stories/selector.js');
  require('../stories/annotator.js');
  require('../stories/annotator-stateful.js');

  require('../stories/progress-bar.js');

  require('../stories/selectable-annotation.js');
  require('../stories/liqen-creator.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
