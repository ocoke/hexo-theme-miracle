/* global hexo */

'use strict';

const fs = require('fs');
const path = require('path');

// generate 404 page
if (!fs.existsSync(path.join(hexo.source_dir, '404.html'))) {
  hexo.extend.generator.register('_404', function(locals) {
    if (this.theme.config.page404.enable !== false) {
      return {
        path  : '404.html',
        data  : locals.theme,
        layout: '404'
      };
    }
  });
}

// generate tags Page
hexo.extend.generator.register('_tags', function(locals) {
  if (this.theme.config.tag.enable !== false) {
    return {
      path  : 'tags/index.html',
      data  : locals.theme,
      layout: 'tags'
    };
  }
});

// generate categories Page
hexo.extend.generator.register('_categories', function(locals) {
  if (this.theme.config.category.enable !== false) {
    return {
      path  : 'categories/index.html',
      data  : locals.theme,
      layout: 'categories'
    };
  }
});

// generate links page
hexo.extend.generator.register('_links', function(locals) {
  if (this.theme.config.links.enable !== false) {
    return {
      path  : 'links/index.html',
      data  : locals.theme,
      layout: 'links'
    };
  }
});

// generate search page
hexo.extend.generator.register('_search', function(locals) {
  if (this.theme.config.search.enable !== false) {
    return {
      path  : 'search/index.html',
      data  : locals.theme,
      layout: 'search'
    };
  }
});

// generate talk page
hexo.extend.generator.register('_talk', function(locals) {
  if (this.theme.config.talk.enable !== false) {
    return {
      path  : 'talk/index.html',
      data  : locals.theme,
      layout: 'talk'
    };
  }
});