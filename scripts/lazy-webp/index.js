'use strict';

if (hexo.config.lazyload && hexo.config.lazyload.enable === true) {
    if (hexo.config.lazyload.onlypost) {
        hexo.extend.filter.register('after_post_render', require('./lib/process').processPost);
    } else {
        hexo.extend.filter.register('after_render:html', require('./lib/process').processSite);
    }
}
if (hexo.config.webp && hexo.config.webp.enable === true) {
    hexo.extend.filter.register('after_render:html', require('./lib/process').processWebP);
}