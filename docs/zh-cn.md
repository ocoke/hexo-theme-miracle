# Wiki (简体中文)

`Hexo Theme Miracle` 是一款简洁的单栏 [Hexo](https://hexo.io) 主题。

## 目录

- [下载与安装](#下载与安装)
    - [NPM](#npm)
    - [发行版](#发行版)
- [覆盖配置](#覆盖配置)
- [更新主题](#更新主题)
    - [NPM](#npm-1)
    - [发行版](#发行版-1)
    - [Git](#git)
- [基础配置](#基础配置)
    - [博主信息](#博主信息)
    - [自定义字体](#自定义字体)
    - [导航栏菜单](#导航栏菜单)
    - [文章字数统计&时长预计](#文章字数统计时长预计)
    - [评论插件](#评论插件)
    - [站内搜索](#站内搜索)
    - [网页统计](#网页统计)
    - [文章排序 (置顶)](#文章排序-置顶)
    - [代码高亮](#代码高亮)
- [进阶玩法](#进阶玩法)
    - [图标](#图标)
    - [Tag 插件](#tag-插件)
    - [Mermaid 流程图](#mermaid-流程图)
    - [自定义](#自定义)

## 下载与安装

在开始前，你需要先安装 Hexo 并初始化你的博客。

### NPM

1. 在博客目录下执行以下命令：

```bash
npm install hexo-theme-miracle —-save
```
2. 在博客目录下创建 `_config.miracle.yml`，将主题的 [_config.yml](https://github.com/hifun-team/hexo-theme-miracle/blob/master/_config.yml) 内容复制过去。
3. 修改博客目录下的 `_config.yml` 文件。

```yaml
lang: zh-CN # 可选项，用与匹配语言文件
theme: miracle # 指定主题
```

### 发行版

1. 前往 GitHub 下载 [最新的发行版](https://github.com/hifun-team/hexo-theme-miracle/releases) 。
2. 将其解压至博客目录下的 `themes` 目录内。
3. 将文件夹重命名为 `miracle`。
4. 修改博客目录下的 `_config.yml` 文件。

```yaml
lang: zh-CN # 可选项，用与匹配语言文件
theme: miracle # 指定主题
```

## 覆盖配置

> 覆盖配置可以使主题配置放置在主题目录之外，避免在更新主题时丢失自定义的配置。<br/>
> 通过 NPM 安装主题的用户可忽略。

Hexo 5.0.0 版本以上的用户，在博客目录下创建 `_config.miracle.yml` 文件，将主题的 [_config.yml](https://github.com/hifun-team/hexo-theme-miracle/blob/master/_config.yml) 内容复制过去。

以后如果修改任何主题配置，都只需修改 `_config.miracle.yml` 的配置即可。

请注意：

- `_config.miracle.yml` 的配置优先级更高，修改原 `_config.yml` 是无效的。
- 每次更新主题可能存在配置变更，请注意更新说明中的「配置文件变更」，手动对 `_config.miracle.yml` 同步修改。
- 想查看覆盖配置有没有生效，可以通过 `hexo g --debug` 查看命令行输出。
- 如果想将某些配置覆盖为空，注意不要把其主键删掉，否则无法覆盖。

## 更新主题

### NPM

如果您是使用 NPM 安装主题，请在博客目录下执行命令：

```bash
npm update hexo-theme-miracle --save
```

### 发行版

1. 将自己的配置文件备份（如果使用 [覆盖配置](#覆盖配置) 功能可忽略此步骤）；
2. 将 `miracle` 文件夹全部删除，重新下载 [发行版](https://github.com/hifun-team/hexo-theme-miracle/releases) 并解压；
3. 如果某些配置发生了变化，发行版的的说明里会特别提示，同步修改原配置文件即可。

### Git

如果您修改了主题的源码文件，或想使用开发版，可参考以下更新步骤：

1. 确保自己的 `miracle` 目录已经开启 `git`，并且所有改动都已 `commit`
2. 拉取仓库 (请自行根据实际情况修改分支等信息)：

```bash
git pull https://github.com/hifun-team/hexo-theme-miracle.git master
```

3. 解决代码冲突。


## 基础配置

### 博主信息

主题会在首页展示博主的名称与 Slogan 。


```yaml
index:
    name: YFun's Blog # 博主 / 站点的名称
    slogan: Write the miracle in your heart. # Slogan
```

### 社交媒体

主题可在博主的名称与 Slogan 下方展示 社交媒体。

其中，每个社交媒体的 `link` 与 `name` 是必须的，如果没有这两个值，将不会展示。

您还可以配置 `icon` 的值，可参考 [FontAwesome 官网](https://fontawesome.com/icons?d=gallery)。

```yaml
index:
    social:
        - { name: "GitHub", icon: "fab fa-github" , link: "https://github.com/hifun-team" }
        - { name: "Gitee"  , link: "https://gitee.com/hifun-team" }
```

### 自定义字体

所有页面的字体可以通过主题配置中的配置项设置：

```yaml
global:
    font:
        # 页面字体
        family: "'Noto Sans SC', sans-serif"
        # 字体 CSS 文件，选填，默认使用 Google Fonts
        css: https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap
```


### 导航栏菜单

导航栏菜单可以自行增减。

```yaml
navbar:
    menu:
        Home: /
        导航栏文本: 导航栏链接
        GitHub: https://github.com
```

### 文章字数统计&时长预计

首先，在配置文件中启用文章字数统计与时长预计。

```yaml
post:
    wordcount:
        enable: true # 设为 True。
      
    min2read:
        enable: true # 设为 True。
        
```

随后，可根据自己的需要修改文章的阅读速度：

```yaml
post:
    min2read:
        # 每分钟阅读多少字，如果是技术文章，建议降低
        # Words read per minute
        words: 120
```

### 评论插件

首先，启用评论插件。

```yaml
post:
    comment: true
```

并在下方选择对应的评论程序。

> 目前支持 `Gitalk` / `Valine` / `Waline` / `Twikoo` 作为评论系统。

```yaml
comment:
    type: gitalk # valine / waline / twikoo
```

最后，根据选择的评论系统与评论的官方文档在下方逐一配置。

> Tips: 仅需要配置您选择的评论系统即可。

### 站内搜索

主题已集成 `hexo-generator-search` 插件，仅需启用即可。

```yaml
search:
    enable: true
```

> 如已安装其他搜索插件请关闭，避免生成多余的索引文件。

### 网页统计

目前统计平台支持 百度统计、谷歌统计、51.la、友盟（CNZZ）与 不蒜子。

请参考配置文件中的注释完成配置。

> 需要注意！如果在使用 不蒜子统计 时不想在页面的底部显示 PV 和 UV，请将 `pv_format` 和 `uv_format` 留空。

```yaml
global:
    # 网页访问统计
    # Analysis of website visitors
    web_analytics:
        # 百度统计的 Key，值需要获取下方链接中 `hm.js?` 后边的字符串
        # Baidu analytics, get the string behind `hm.js?`
        # See: https://tongji.baidu.com/sc-web/10000033910/home/site/getjs?siteId=13751376
        baidu:
        
        # Google 统计的 Tracking ID
        # Google analytics, set Tracking ID
        # See: https://developers.google.com/analytics/devguides/collection/analyticsjs
        google:
        
        # 51.la 站点统计 ID
        # 51.la analytics
        # See: https://www.51.la/user/site/index
        woyaola: 

        # 友盟/cnzz 站点统计 web_id
        # cnzz analytics
        # See: https://web.umeng.com/main.php?c=site&a=show
        cnzz:

        busuanzi:
            enable: true
            # 页面显示的文本，{} 是数字的占位符（必须包含），下同
            # Displayed text, {} is a placeholder for numbers (must be included), the same below.
            pv_format: "总访问量 {} 次"
            uv_format: "总访客数 {} 人"
```

### 文章排序 (置顶)

如果想将改变文章在首页的顺序，可以在 [Front-Matter](https://hexo.io/zh-cn/docs/front-matter) 中配置 `sticky` 的值。

`sticky` 的值越大，则文章在首页的排序越靠前。

```markdown
---
title: Title
sticky: 100
---
Content
```

### 代码高亮

修改**博客配置**（博客目录下的 `_config.yml` 文件）：

```yaml
highlight:
    enable: true # 启用高亮
    line_number: false
    auto_detect: false
    tab_replace: ''
    wrap: false # 推荐 False
    hljs: true # 必须为 True
```

随后修改主题配置：

```yaml
post:
    # 代码显示设置
    # Code display setting
    code:
        # 代码高亮
        # Code highlight
        highlight: true # 设为 True
```


## 进阶玩法

### 图标

主题内置 FontAwesome 图标，你可以直接使用 HTML 引入。

所有的图标列表请参考 [FontAwesome 官网](https://fontawesome.com/icons?d=gallery)。

### Tag 插件

#### 便签

在文章的 Markdown 中加入以下的代码来使用便签：

```markdown
{% note success %}
<div class="title">标题（可选）</div>
此处可以使用文字或者 **Markdown**
{% endnote %}
```

也可以使用 HTML：

```html
<div class="note note-success">
Hello!
</div>
```

注：示例中的 `success` 是可以被替换为其他便签，以下是所有便签：

- [default](https://miracle-demo.now.sh/2021/01/11/note/#default) - 默认的样式。
- [success](https://miracle-demo.now.sh/2021/01/11/note/#success) - 一般展示成功信息等。
- [danger](https://miracle-demo.now.sh/2021/01/11/note/#danger) - 一般展示错误或危险警告等。
- [warning](https://miracle-demo.now.sh/2021/01/11/note/#warning) - 一般展示警告等。
- [info](https://miracle-demo.now.sh/2021/01/11/note/#info) - 一般展示信息等。

> 使用时 `{% note %}` 和 `{% endnote %}` 需单独一行，否则会出现问题。


#### 卡片

在文章的 Markdown 中加入以下的代码来使用折叠卡片：

```markdown
{% card 折叠标题 %}

此处可以使用文字或者 **Markdown**

{% endcard %}
```

也可以使用 HTML：

```html
<div class="collapse">
<div class="header">
<span class="title">Title</span>
<span class="icon fas fa-chevron-down"></span>
</div>
<div class="content">
content...
</div>
</div>
```

> 使用时 `{% card %}` 和 `{% endcard %}` 需单独一行，否则会出现问题。

> 当您点击任意一个卡片时，所有的卡片都会被展开。

### Mermaid 流程图

首先，在配置文件中启用 Mermaid 流程图。

```yaml
post:
    mermaid:
        enable: true # 设为 True。
```

在文章的 Markdown 中加入以下的代码来使用 Mermaid 流程图：

```markdown
{% mermaid %}
    text
{% endmermaid %}
```

也可以使用 HTML：

```html
<div class="mermaid">
    text
</div>
```

### 自定义

#### HTML

您可以自定义页面头部和底部的 HTML 代码。

```yaml
custom:
    # 页面头部 HTML
    # Page header HTML
    header_html: ''
    # 页面底部 HTML
    # Page footer HTML
    footer_html: ''
```

> 页面底部 HTML 可以使用 `p` 或 `span` 在页面底部输出文字。

#### JavaScript

您可以自定义引入的 JavaScript 文件。

单文件引入：

```yaml
custom:
    js: '/path/to/your/file.js'
```

多文件引入：

```yaml
custom:
    js: 
        - '/path/to/your/file/1.js'
        - '/path/to/your/file/2.js'
```

> 请注意！此处引入的 JavaScript 文件只会在页面的底部引入（ `</body>` 前）。<br/>
> 如您需要在页面的头部引入，请自定义 HTML。

#### CSS

您可以自定义引入的样式表文件。

单文件引入：

```yaml
custom:
    css: '/path/to/your/file.css'
```

多文件引入：

```yaml
custom:
    css: 
        - '/path/to/your/file/1.css'
        - '/path/to/your/file/2.css'
```

---

<div class="create-pr">
<p style="float: left;"><a href="https://github.com/hifun-team/hexo-theme-miracle/edit/master/docs/zh-cn.md">📝 帮助我们完善文档</a>
</div>