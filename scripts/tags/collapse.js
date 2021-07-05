/* global hexo */

'use strict';

const note = (args, content) => {
  if (!args || !args[0]) {
    args = ['No Title'];
  }
  return `
  <details class="post-details">
  <summary>${args.join(' ')}</summary>
<div class="details-content">
  ${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}
  
  </div></details>`;
};

/*
  {% card title %}
  text
  {% endcard %}
 */
hexo.extend.tag.register('card', note, { ends: true });