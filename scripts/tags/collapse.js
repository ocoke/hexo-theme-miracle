/* global hexo */

'use strict';

const note = (args, content) => {
  if (!args || !args[0]) {
    args = ['No Title'];
  }
  return `
  <details>
  <summary>${args.join(' ')}</summary>
  ${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}
  </details>`;
};

/*
  {% card title %}
  text
  {% endcard %}
 */
hexo.extend.tag.register('card', note, { ends: true });