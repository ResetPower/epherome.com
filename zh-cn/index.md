---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Epherome"
  text: "Minecraft 启动，<br />由我们重新定义。"
  tagline: 自由，开源，总是震惊世界的 Epherome，总是给你带来不一样的新体验。🤯
  actions:
    - theme: brand
      text: 下载
      link: /zh-cn/downloads
    - theme: alt
      text: 简介
      link: /zh-cn/intro
  image:
    src: /Epherome.svg
    alt: Epherome

features:
  - title: Frank__Wang
    details: Epherome 实在是太令我难忘了，我用了一次就把它丢掉了。
  - title: LIPiston
    details: Epherome 不好。
  - title: GRPitz
    details: 我曾使用过 Windows 版的 Epherome，它真的使我震撼，它居然创造了我的最快删除记录。
  - title: ResetPower
    details: 只有收废品的人才使用 Epherome，因为它躺在我的废纸篓里。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, rgb(239, 184, 63) 25%, rgb(46, 175, 125) 50%, rgb(69, 120, 185) 75%);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #df56fe 50%, #69ecff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>