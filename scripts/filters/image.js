'use strict'
hexo.extend.filter.register(
    'after_post_render',
    function (data) {
        const theme = hexo.theme.config;
        if (theme.post.lazyload.enable){
            // 仅开启 Lazyload
            data.content = data.content.replace(
                // Match 'img' tags width the src attribute.
                /<img([^>]*)src="([^"]*)"([^>]*)>/gim,
                function (match, attrBegin, src, attrEnd) {
                    // Exit if the src doesn't exists.
                    if (!src) return match;

                    return `<img ${attrBegin} class="lazyload-img" src="${src}" srcset="${theme.post.lazyload.loadImg}" data-srcset="${src}" ${attrEnd} >`
                }
            )
        }else{
            return;
        }
    },
    1
);
