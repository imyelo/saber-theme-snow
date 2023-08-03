<h1 align="center">
  <p>saber-theme-snow</p>
  <p><img src="https://vip2.loli.io/2023/08/03/jawJrbAZno8z3Ss.png" width="320" /></p>
</h1>

> ❄️ Snow theme for [Saber](https://saber.egoist.dev/)

## Get Started

```bash
yarn add -D saber @yelo/saber-theme-snow \
  @yelo/saber-plugin-copyright @yelo/saber-plugin-medium-zoom @yelo/saber-plugin-query-drafts \
  # optional:
  markdown-it-anchor markdown-it-emoji markdown-it-footnote markdown-it-implicit-figures markdown-it-multimd-table \
  saber-highlight-css saber-highlighter-prism saber-plugin-feed saber-plugin-google-analytic saber-plugin-prismjs saber-plugin-query-posts saber-plugin-seo saber-plugin-sitem
```

## Usage

### `saber-config.yml`

```yaml
theme: '@yelo/snow'
siteConfig:
  title: Snow
  author: Yelo
  url: https://saber-theme-snow.yelo.ooo/
themeConfig:
  avatar: /avatar.png
  # Use your own disqus config
  # - https://github.com/SukkaW/disqusjs#%E9%85%8D%E7%BD%AE-disqusjs-%E5%8F%82%E6%95%B0
  disqus:
    # shortname:
    # siteName:
    # apikey:
permalinks:
  post: /:year/:month/:day/:slug.html
  page: /:slug.html
markdown:
  highlighter: prism
  plugins:
    - resolve: markdown-it-emoji
    - resolve: markdown-it-footnote
    - resolve: markdown-it-implicit-figures
    - resolve: markdown-it-multimd-table
    - resolve: markdown-it-anchor
      options:
        permalink: true
        permalinkSymbol: '📎'
        permalinkBefore: true
plugins:
  - resolve: saber-plugin-prismjs
  - resolve: saber-plugin-query-posts
  - resolve: '@yelo/saber-plugin-query-drafts'
  - resolve: saber-plugin-seo
  # - resolve: saber-plugin-google-analytics
  #   options:
  #     trackId: UA-000000000-0
  - resolve: saber-plugin-feed
    options:
      atomFeed: true
      rss2Feed: true
      jsonFeed: true
  - resolve: saber-plugin-sitemap
  - resolve: '@yelo/saber-plugin-medium-zoom'
    options:
      selector: 'figure img'
      options:
        background: '"hsl(0, 0%, 98%, .9)"'
  - resolve: '@yelo/saber-plugin-copyright'
    options:
      copyright: >
        [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh) &copy; [Snow](https://saber-theme-snow.yelo.ooo)
```

### `pages/index.md`

```yaml
layout: home
injectAllPosts: true
catchMe:
  - name: GitHub
    url: https://github.com/imyelo
  - name: Talks
    url: https://talks.yelo.cc
    hide: true
  - name: Email
    url: bWVAeWVsby5jYw==
    email: true
createdAt: 2019-04-24
updatedAt: 2023-08-03
```

### `pages/_posts/foobar.md`

```markdown
---
title: Markdown Test Page
createdAt: 2019-04-27
layout: post
categories:
  - Baz
tags:
  - foo
  - bar
keywords: # optional
  - foo
  - bar
  - baz
copyright: false # optional
original: https://github.com/fullpipe/markdown-test-page # optional
author: Unknown # optional
avatar: /unknown-avatar.png # optional
draft: false # optional
---

### Heading three

Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat commodo id sunt. Nostrud enim ad commodo incididunt cupidatat in ullamco ullamco Lorem cupidatat velit enim et Lorem. Ut laborum cillum laboris fugiat culpa sint irure do reprehenderit culpa occaecat. Exercitation esse mollit tempor magna aliqua in occaecat aliquip veniam reprehenderit nisi dolor in laboris dolore velit.
```

### `package.json`

Since Saber has been unmaintained for a long time, you may not be able to enable it properly when using the last version of Saber, so it is recommended that you add the following to `package.json`:

```json
{
  // ...
  "scripts": {
    "start": "NODE_OPTIONS=--openssl-legacy-provider saber",
    "build": "NODE_OPTIONS=--openssl-legacy-provider saber build"
  },
  "resolutions": {
    "vue-server-renderer": "2.6.14",
    "vue-template-compiler": "2.6.14",
    "vue": "2.6.14"
  }
}
```

## Example

**Check [`/example`](./example/) folder for detail**

## Live demo

- [Yelo](https://yelo.cc)

## License

Apache-2.0 &copy; [yelo](https://github.com/imyelo), 2019 - present
