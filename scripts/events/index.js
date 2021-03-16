/* global hexo */

'use strict';


hexo.on('generateBefore', () => {
    require('./lib/hello')(hexo);
    require('./lib/footnote')(hexo);
});

hexo.on('generateAfter', () => {
    require('./lib/version')(hexo);
});

