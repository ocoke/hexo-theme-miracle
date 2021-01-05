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
    - [Banner Slogan](#banner-slogan)
    - [导航栏菜单](#导航栏菜单)
    - [文章字数统计&时长预计](#文章字数统计时长预计)
    - [评论插件](#评论插件)

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

在博客目录执行命令安装：

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
