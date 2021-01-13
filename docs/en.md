# Wiki (English)

`Hexo Theme Miracle` is a simple single-column [Hexo](https://hexo.io) theme.

> English documents may not be updated in time, you can check [Chinese documents](?p=zh-cn).

## Toc

- [Download and install](#download-and-install)
    - [NPM](#npm)
    - [Release](#release)
- [Overwrite configuration](#overwrite-configuration)
- [Update theme](#update-theme)
    - [NPM](#npm-1)
    - [Release](#release-1)
    - [Git](#git)
- [Basic configuration](#basic-configuration)
    - [Blogger Information](#blogger-Information)
    - [Custom font](#custom-font)
    - [Navigation bar menu](#navigation-bar-menu)
    - [Article word count & duration estimation](#article-word-count--duration-estimation)
    - [Comment plugin](#comment-plugin)
    - [Site Search](#site-search)
    - [Web Analytics](#web-analytics)
    - [Article Sort (Top)](#article-sort-top)
    - [Code highlighting](#code-highlighting)
- [Advanced](#advanced)
    - [icon](#icon)
    - [Tag plugin](#tag-plugin)
    - [Custom](#custom)

## Download and install

Before starting, you need to install Hexo and initialize your blog.

### NPM

1. run the following command in the blog directory:

```bash
npm install hexo-theme-miracle —-save
```
2. Create `_config.miracle.yml` in the blog directory, and set the theme's [_config.yml](https://github.com/hifun-team/hexo-theme-miracle/blob/master/_config.yml) The content is copied over.

3. Edit the `_config.yml` file in the blog directory.

```yaml
lang: zh-CN # Optional, use and match language files
theme: miracle # Specify theme
```

### Release

1. Go to GitHub to download the [latest release](https://github.com/hifun-team/hexo-theme-miracle/releases).
2. Unzip it to the `themes` directory under the blog directory.
3. Rename the folder to `miracle`.
4. Edit the `_config.yml` file in the blog directory.

```yaml
lang: zh-CN # Optional, use and match language files
theme: miracle # Specify theme
```

## Overwrite configuration

> Overwriting the configuration can make the theme configuration be placed outside the theme directory to avoid losing the customized configuration when updating the theme. <br/>
> Users who install themes via NPM can ignore it.

For users of Hexo 5.0.0 and above, create a `_config.miracle.yml` file in the blog directory, and add the theme's [_config.yml](https://github.com/hifun-team/hexo-theme-miracle/blob/master/_config.yml) The contents are copied over.

If you edit any theme configuration in the future, you only need to edit the configuration of `_config.miracle.yml`.

caution:

- The configuration priority of `_config.miracle.yml` is higher. Edit the original `_config.yml` is invalid.
- There may be configuration changes each time the theme is updated. Please pay attention to the "configuration file changes" in the update instructions and manually edit the `_config.miracle.yml`.
- If you want to check whether the overwrite configuration has taken effect, you can check the command line output through `hexo g --debug`.
- If you want to overwrite some configuration to be empty, be careful not to delete its primary key, otherwise it cannot be overwritten.

## Update theme

### NPM

If you are using NPM to install themes, please run the command in the blog directory:

```bash
npm update hexo-theme-miracle --save
```

### Release

1. Back up your configuration file (if you use the [overwrite configuration](#overwrite-configuration) function, you can ignore this step);
2. Delete all the `miracle` folders, re-download [release](https://github.com/hifun-team/hexo-theme-miracle/releases) and unzip;
3. If some configuration changes, there will be a special reminder in the instructions of the release, and you can edit the original configuration file synchronously.

### Git

If you edit the source code file of the theme, or want to use the development version, you can refer to the following update steps:

1. Make sure your `miracle` directory has opened `git`, and all changes have been `commit`
2. Pull the warehouse (please edit the branch and other information according to the actual situation):

```bash
git pull https://github.com/hifun-team/hexo-theme-miracle.git master
```

3. Resolve code conflicts.


## Basic configuration

### Blogger Information

The theme will show the blogger’s name and Slogan on the homepage.


```yaml
index:
    name: YFun's Blog # blogger / name of the site
    slogan: Write the miracle in your heart. # Slogan
```

### social media

Topics can be displayed under the blogger’s name and Slogan on social media.

Among them, the `link` and `name` of each social media are required. If these two values ​​are not present, they will not be displayed.

You can also configure the value of `icon`, refer to [FontAwesome official website](https://fontawesome.com/icons?d=gallery).

```yaml
index:
    social:
        - { name: "GitHub", icon: "fab fa-github", link: "https://github.com/hifun-team" }
        - { name: "Gitee", link: "https://gitee.com/hifun-team" }
```

### Custom font

The font of all pages can be set through the configuration items in the theme configuration:

```yaml
global:
    font:
        # Page font
        family: "'Noto Sans SC', sans-serif"
        # Font CSS file, optional, use Google Fonts by default
        css: https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap
```


### Navigation bar menu

The navigation bar menu can be increased or decreased by itself.

```yaml
navbar:
    menu:
        Home: /
        Navigation bar text: Navigation bar link
        GitHub: https://github.com
```

### Article word count & duration estimation

First, enable article word count and duration estimation in the configuration file.

```yaml
post:
    wordcount:
        enable: true # Set to True.
      
    min2read:
        enable: true # Set to True.
        
```

Later, you can edit the reading speed of the article according to your needs:

```yaml
post:
    min2read:
        # How many words read per minute, if it is a technical article, it is recommended to reduce
        # Words read per minute
        words: 120
```

### Comment plugin

First, enable the comment plugin.

```yaml
post:
    comment: true
```

And select the corresponding comment program below.

> Currently supports `Gitalk` / `Valine` / `Waline` as a comment system.

```yaml
comment:
    type: gitalk # valine / waline
```

Finally, configure one by one below according to the selected comment system and official documentation of comments.

> Tips: You only need to configure the comment system of your choice.

### Site Search

The theme has integrated the `hexo-generator-search` plugin, just enable it.

```yaml
search:
    enable: true
```

> If you have installed other search plugins, please close them to avoid generating redundant index files.

### Web Analytics

Currently, the Analytics platform supports Baidu Analytics, Google Analytics, 51.la, Youmeng (CNZZ) and Bushuanzi.

Please refer to the notes in the configuration file to complete the configuration.

> Need attention! If you don't want to display PV and UV at the bottom of the page when using the Analytics without garlic, please leave `pv_format` and `uv_format` blank.

```yaml
global:
    # Webpage visit Analytics
    # Analysis of website visitors
    web_analytics:
        # Baidu analytics, get the string behind `hm.js?`
        # See: https://tongji.baidu.com/sc-web/10000033910/home/site/getjs?siteId=13751376
        baidu:
        
        # Google analytics, set Tracking ID
        # See: https://developers.google.com/analytics/devguides/collection/analyticsjs
        google:
        
        # 51.la analytics
        # See: https://www.51.la/user/site/index
        woyaola:

        # cnzz analytics
        # See: https://web.umeng.com/main.php?c=site&a=show
        cnzz:

        busuanzi:
            enable: true
            # The text displayed on the page, {} is a placeholder for numbers (must be included), the same below
            # Displayed text, {} is a placeholder for numbers (must be included), the same below.
            pv_format: "Total visits {} times"
            uv_format: "Total visitors {} people"
```

### Article Sort (Top)

If you want to change the order of articles on the home page, you can configure the value of `sticky` in [Front-Matter](https://hexo.io/zh-cn/docs/front-matter).

The higher the value of `sticky`, the higher the ranking of the article on the homepage.

```markdown
---
title: Title
sticky: 100
---
Content
```


### Code highlighting

Edit **blog configuration** (the `_config.yml` file in the blog directory):

```yaml
highlight:
    enable: true # enable highlight
    line_number: false
    auto_detect: false
    tab_replace: ''
    wrap: false # Recommend False
    hljs: true # must be True
```

Then edit the theme configuration:

```yaml
post:
    # Code display settings
    code:
        # Code highlight
        highlight: true # set to True
```


## Advanced

### icon

The theme has built-in FontAwesome icons, you can directly use HTML to import them.

Please refer to [FontAwesome official website](https://fontawesome.com/icons?d=gallery) for the list of all icons.

### Tag plugin

Add the following code in the Markdown of the article to use the sticky notes:

```markdown
{% note success %}
<div class="title">Title (optional)</div>
You can use text or **Markdown** here
{% endnote %}
```

You can also use HTML:

```html
<div class="note note-success">
Hello!
</div>
```

Note: The `success` in the example can be replaced with other notes, the following are all notes:

- [default](https://miracle-demo.now.sh/2021/01/11/note/#default) - the default style.
- [success](https://miracle-demo.now.sh/2021/01/11/note/#success) - Generally display success information, etc.
- [danger](https://miracle-demo.now.sh/2021/01/11/note/#danger) - General display errors or danger warnings.
- [warning](https://miracle-demo.now.sh/2021/01/11/note/#warning) - General warnings, etc. are displayed.
- [info](https://miracle-demo.now.sh/2021/01/11/note/#info) - General display information, etc.

> When using, `{% note %}` and `{% endnote %}` must be on a separate line, otherwise problems will occur.


### Custom

#### HTML

You can customize the HTML code at the head and bottom of the page.

```yaml
custom:
    # Page header HTML
    header_html: ''
    # HTML at the bottom of the page
    footer_html: ''
```

> HTML at the bottom of the page You can use `p` or `span` to output text at the bottom of the page.

#### JavaScript

You can customize the imported JavaScript file.

Single file introduction:

```yaml
custom:
    js: '/path/to/your/file.js'
```

Multi-file introduction:

```yaml
custom:
    js:
        - '/path/to/your/file/1.js'
        - '/path/to/your/file/2.js'
```

> Attention! The JavaScript file introduced here will only be introduced at the bottom of the page (before `</body>`). <br/>
> If you need to import in the head of the page, please customize HTML.

#### CSS

You can customize the imported style sheet file.

Single file introduction:

```yaml
custom:
    css: '/path/to/your/file.css'
```

Multi-file introduction:

```yaml
custom:
    css:
        - '/path/to/your/file/1.css'
        - '/path/to/your/file/2.css'
```

---

<div class="create-pr">
<p style="float: left;"><a href="https://github.com/hifun-team/hexo-theme-miracle/edit/master/docs/en.md">📝 Help us improve the docs</a>
</div>