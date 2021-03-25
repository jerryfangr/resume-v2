<template>
  <div id="app">
    <nav-bar></nav-bar>

    <!-- user info start -->
    <title-section>介绍</title-section>
    <main-section></main-section>
    <!-- user info end -->

    <section class="download">
      <a href="/方涵聪-应聘前端-2021.pdf" download>下载 PDF 简历</a>
    </section>
    
    <!-- skill start -->
    <title-section>技能</title-section>
    <skill-section></skill-section>
    <!-- skill end -->

    <!-- portfolio start -->
    <title-section>作品</title-section>
    <portfolio-section></portfolio-section>
    <!-- portfolio end -->

    <!-- portfolio start -->
    <title-section>其他</title-section>
    <!-- portfolio end -->

    <!-- portfolio start -->
    <title-section>留言</title-section>
    <!-- portfolio end -->
  </div>
</template>

<script>
import 'animate.css';
import './assets/ali-icon';
import navBar from './components/nav-bar/nav-bar';
import titleSection from './components/title-section/title-section';
import mainSection from './components/main-section/main-section';
import skillSection from './components/skill-section/skill-section';
import portfolioSection from './components/portfolio-section/portfolio-section';

export default {
  name: 'App',
  components: {
    navBar,
    titleSection,
    mainSection,
    skillSection,
    portfolioSection
  }
}
</script>

<style lang="scss">
section {
  width: 100vmin;
  max-width:100%;
  margin: 0 auto;
}
body {
  background: #e6eaf0;
  background: linear-gradient(315deg, #c4cbd4 0%, #e6eaf0 30%, #e6eaf0 100%);
}
#app {
  margin: 0;
  // padding: 0.1px;
  // overflow: hidden;
  max-width:100%;
  min-height: 100vh;
  background: #e6eaf0;
  // background: linear-gradient(315deg, #c4cbd4 0%, #e6eaf0 30%, #e6eaf0 100%);

  section.download {
    margin-top: 5vmin;
    text-align: center;
    a {
      display: inline-block;
      font-size: 2vmin;
      line-height: 16px;
      padding: 2vmin 2vmin;
      border: 1px solid #cbcdcf;
      border-radius: 2px;
      color: $text-color-title;
      font-weight: bold;
      transition: box-shadow 0.3s;    
      &:hover {
        opacity: 0.95;
        box-shadow: 0 0.5vmin 1vmin 0 rgba(0,0,0, 0.18), 0 0.5vmin 2vmin 0 rgba(0,0,0, 0.15);
      }
    }
  }
}
</style>
