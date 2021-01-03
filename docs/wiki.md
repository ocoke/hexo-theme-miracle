# Wiki (简体中文)

<p align="center">简体中文｜<a href="wiki-en.md">English</a></p>

`Hexo Theme Miracle` 是一款简洁的单栏 [Hexo](https://hexo.io) 主题。

## 目录

- [下载与安装](#下载与安装)
    - [NPM](#NPM)
    - [发行版](#发行版)
    - [GitHub](#GitHub)
- [基础配置](#基础配置)
    - [Banner Slogan](#Banner-Slogan)
    - [导航栏菜单](#导航栏菜单)
    - [文章字数统计&时长预计](#文章字数统计时长预计)
    - [评论插件](#评论插件)

## 下载与安装

在开始前，你需要先安装 Hexo 并初始化你的站点。

### NPM

1. 在站点目录下运行以下命令：

```bash
npm install hexo-theme-miracle —-save
```
2. 修改站点目录下的 `_config.yml` 文件。

```yaml
lang: zh-CN # 可选项，用与匹配语言文件
theme: miracle # 指定主题
```

### 发行版

1. 前往 GitHub 下载 [最新的发行版](https://github.com/hifun-team/hexo-theme-miracle/releases) 。
2. 将其解压至站点目录下的 `themes` 目录内。
3. 将文件夹重命名为 `miracle`。
4. 修改站点目录下的 `_config.yml` 文件。

```yaml
lang: zh-CN # 可选项，用与匹配语言文件
theme: miracle # 指定主题
```

### GitHub

> 我们不推荐您使用此方式安装主题。<br/>
> 您使用此方式下载的是**开发版**，可能存在不稳定的情况！

1. 在站点目录下运行以下命令：

```bash
git clone --depth 1 https://github.com/hifun-team/hexo-theme-miracle.git themes/miracle
```
2. 修改站点目录下的 `_config.yml` 文件。

```yaml
lang: zh-CN # 可选项，用与匹配语言文件
theme: miracle # 指定主题
```

## 基础配置

### Banner Slogan

主题会在首页展示一句 Slogan，您可以通过修改主题配置文件来修改这句话。

```yaml
index:
    banner_slogan: Write the miracle in your heart.
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

> 需要先安装 `hexo-wordcount` 插件。

在站点目录运行命令安装：

```bash
npm install hexo-wordcount --save
```

随后，在配置文件中启用文章字数统计与时长预计。

```yaml
post:
    wordcount:
        enable: true # 设为 True。
      
    min2read:
        enable: true # 设为 True。
        
```

### 评论插件

首先，启用评论插件。

```yaml
post:
    comment: true
```

并在下方选择对应的评论程序。

> 目前支持 `Gitalk` / `Valine` / `Waline` 作为评论系统。

```yaml
comment:
    type: gitalk # valine / waline
```

最后，根据选择的评论系统与官方文档在下方逐一配置。

> Tips: 仅需要配置您选择的评论系统即可。
