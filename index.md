---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Epherome."
  text: "Redefine Minecraft Launching."
  tagline: Free. Open Source. Always surprises you with appalling new features. 🤯
  actions:
    - theme: brand
      text: Downloads
      link: /downloads
    - theme: alt
      text: Introduction
      link: /intro
  image:
    src: /Epherome.svg
    alt: Epherome

features:
  - title: Frank__Wang
    details: Epherome is really unforgettable, I used it once and threw it away.
  - title: LIPiston
    details: Epherome is not good.
  - title: GRPitz
    details: I've used Epherome for Windows and it really amazes me that it holds the record for the fastest deletion I've ever had.
  - title: ResetPower
    details: Only waste collectors are willing to use Epherome because it lies in my wastepaper basket.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #df56fe 30%, #53e2ff);

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