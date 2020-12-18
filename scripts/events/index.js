/* global hexo */

'use strict';

hexo.on('generateBefore', () => {
    require('./lib/hello')(hexo);
});

hexo.on('generateAfter', () => {
    require('./lib/version')(hexo);
});