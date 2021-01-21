/* global hexo */

'use strict';

const note = (args, content) => {
  if (!args || !args[0]) {
    args = ['No Title'];
  }
  return `<div class="collapse">
            <div class="header">
            <span class="title">${args.join(' ')}</span>
            <span class="icon fas fa-chevron-down"></span>
            </div>
            <div class="content">
            ${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}
            </div>
            </div>`;
};

/*
  {% card title %}
  text
  {% endcard %}
 */
hexo.extend.tag.register('card', note, { ends: true });