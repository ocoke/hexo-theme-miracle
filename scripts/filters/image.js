'use strict'
hexo.extend.filter.register(
    'after_post_render',
    function (data) {
        const theme = hexo.theme.config;
        if (theme.post.lazyload.enable && theme.post.fancybox.enable){
            // 如果 FancyBox 与 Lazyload 同时开启
            
            data.content = data.content.replace(
                // Match 'img' tags width the src attribute.
                /<img([^>]*)src="([^"]*)"([^>]*)>/gim,
                function (match, attrBegin, src, attrEnd) {
                    // Exit if the src doesn't exists.
                    if (!src) return match;

                    return `
                    <a data-fancybox="gallery" href="${src}">
                        <img ${attrBegin} class="lazyload" src="/img/loading.svg" data-src="${src}" ${attrEnd} >
                    </a>
                    `
                }
            )
        }else if (theme.post.lazyload.enable){
            // 仅开启 Lazyload
            data.content = data.content.replace(
                // Match 'img' tags width the src attribute.
                /<img([^>]*)src="([^"]*)"([^>]*)>/gim,
                function (match, attrBegin, src, attrEnd) {
                    // Exit if the src doesn't exists.
                    if (!src) return match;

                    return `<img ${attrBegin}
                        class="lazyload"
                        src="/img/loading.svg"
                        data-src="${src}"
                        ${attrEnd}
                    >`
                }
            )
        }else if (theme.post.fancybox.enable){
            // 仅开启 Fancybox
            data.content = data.content.replace(
                // Match 'img' tags width the src attribute.
                /<img([^>]*)src="([^"]*)"([^>]*)>/gim,
                function (match, attrBegin, src, attrEnd) {
                    // Exit if the src doesn't exists.
                    if (!src) return match;

                    return `
                    <a data-fancybox="gallery" href="${src}">
                        <img ${attrBegin} src="${src}" ${attrEnd}>
                    </a>
                    >`
                }
            )
        }else{
            return;
        }
    },
    1
);
