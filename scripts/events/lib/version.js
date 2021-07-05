'use strict';

module.exports = (hexo) => {
  if (!hexo.theme.config.global.version_check) {
    return;
  }

  const https = require('https');
  const path = require('path');
  const { version } = require(path.normalize(path.join(hexo.theme_dir, 'package.json')));
  const isZh = hexo.config.language.search(/zh-CN/i) !== -1;

  const errorLog = (_) => {
    if (isZh) {
      hexo.log.warn('[Miracle] 获取主题版本信息失败，可能无法连接至 GitHub 服务器，这不会影响正常使用。');
    } else {
      hexo.log.warn('[Miracle] Failed to detect version info. It won\'t hinder the use.');
    }
  };

  https.get('https://api.github.com/repos/hifun-team/hexo-theme-miracle/releases/latest', {
    headers: {
      'User-Agent': 'Hexo Theme Miracle Client'
    }
  }, (res) => {
    let result = '';
    res.on('data', data => {
      result += data;
    });
    res.on('end', () => {
      try {
        const tag = JSON.parse(result).tag_name;
        if (!tag) {
          errorLog('Missing release tag');
          return;
        }
        const latest = tag.replace('v', '').split('.');
        const current = version.split('.');

        let isOutdated = false;
        for (let i = 0; i < Math.max(latest.length, current.length); i++) {
          if (!current[i] || latest[i] > current[i]) {
            isOutdated = true;
            break;
          }
          if (latest[i] < current[i]) {
            break;
          }
        }

        if (isOutdated) {
          if (isZh) {
            hexo.log.warn(`[Miracle] 有新的版本！当前版本: v${current.join('.')}, 最新版本: v${latest.join('.')}`);
            hexo.log.warn('[Miracle] 请查看 https://github.com/hifun-team/hexo-theme-miracle/releases 获取更多信息.');
          } else {
            hexo.log.warn(`[Miracle] There's a new version! Current version: v${current.join('.')}, latest version: v${latest.join('.')}`);
            hexo.log.warn('[Miracle] Visit https://github.com/hifun-team/hexo-theme-miracle/releases for more information.');
          }
        } else {
          if (isZh) {
            hexo.log.info(`[Miracle] 您现在使用的是已经是最新版本，版本号: v${current.join('.')}`);
          } else {
            hexo.log.info(`[Miracle] Congratulations! You are using the latest version. Current version: v${current.join('.')}`);
          }
        }
      } catch (err) {
        errorLog(err);
      }
    });
  }).on('error', err => {
    errorLog(err);
  });
};