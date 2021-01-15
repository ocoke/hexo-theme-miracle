/* global hexo */

'use strict';

function mermaid(args, content) {
    return `

<div class="mermaid" ${args.join(' ')}>
${content}
</div>
`;
}

/*
  {% mermaid %}
  text
  {% endmermaid %}
 */
hexo.extend.tag.register('mermaid', mermaid, { ends: true });