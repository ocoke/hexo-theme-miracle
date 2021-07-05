// scripts/lazy-webp/lib/process.js

'use strict';

const fs = require('hexo-fs');

function lazyProcess(htmlContent)  {
    let loadingImage = this.config.lazyload.loadingImage || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEXMzMyWlpYU2uzLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAACklEQVQImWNgAAAAAgAB9HFkpgAAAABJRU5ErkJggg==';
    return htmlContent.replace(/<img(.*?)src="(.*?)"(.*?)>/gi, function (str, p1, p2) {
        // might be duplicate
        if (/data-srcset/gi.test(str)){
            return str;
        }
        if (/src="data:image(.*?)/gi.test(str)) {
            return str;
        }
        if (/no-lazy/gi.test(str)) {
            return str;
        }
        return str.replace(p2, p2 + '" class="lazyload-img" ' + 'data-srcset="' + p2 + '" srcset="' + loadingImage);
    });
}

function webpProcess(htmlContent) {
    return htmlContent.replace(/<img(.*?)data-srcset="(.*?)"(.*?)srcset="(.*?)"(.*?)>/gi, function (str, p1, p2, p3, p4) {
        if (/webp-comp/gi.test(p1)) {
            return str;
        }
        return `<picture><source class="lazyload-img" data-srcset="${p2.replace(/\.(jpg|jpeg|png)/gi, '.webp')}" srcset="${p4}" type="image/webp">${str.replace('<img', '<img webp-comp')}</picture>`;
    });
}

module.exports.processPost = function(data) {
    data.content = lazyProcess.call(this, data.content);
    return data;
};

module.exports.processSite = function (htmlContent) {
    return lazyProcess.call(this, htmlContent);
};

module.exports.processWebP = function (htmlContent) {
    return webpProcess.call(this, htmlContent);
}
