<template>
  <div id="app">
    <nav-bar :scrollToComponent="scrollToComponent" :sectionNames="sectionNames"></nav-bar>

    <!-- user info start -->
    <title-section ref="titleMain">介绍</title-section>
    <main-section :user="sectionData.user"></main-section>
    <!-- user info end -->

    <section class="download">
      <a href="./方涵聪-应聘前端-2021.pdf" download>下载 PDF 简历</a>
    </section>
    
    <!-- skill start -->
    <title-section ref="titleSkill">技能</title-section>
    <skill-section :skills="sectionData.skills"></skill-section>
    <!-- skill end -->

    <!-- portfolio start -->
    <title-section ref="titlePortfolio">作品</title-section>
    <portfolio-section :portfolios="sectionData.portfolios"></portfolio-section>
    <!-- portfolio end -->

    <!-- other start -->
    <!-- <title-section>其他</title-section> -->
    <!-- other end -->

    <!-- work experience start -->
    <title-section ref="titleExperience">工作</title-section>
    <experience-section :experience="sectionData.experience"></experience-section>
    <!-- work experience end -->

    <!-- message board start -->
    <title-section ref="titleMessage">留言</title-section>
    <message-section></message-section>
    <!-- message board end -->
  </div>
</template>

<script>
// common
import 'animate.css';
import './assets/ali-icon';
// components
import navBar from './components/nav-bar/nav-bar';
import titleSection from './components/title-section/title-section';
import mainSection from './components/main-section/main-section';
import skillSection from './components/skill-section/skill-section';
import portfolioSection from './components/portfolio-section/portfolio-section';
import messageSection from './components/message-section/message-section';
import experienceSection from './components/experience-section/experience-section';
// personal info
import resumeInfo from './assets/resume-info.json';

export default {
  name: 'App',

  components: {
    navBar,
    titleSection,
    mainSection,
    skillSection,
    portfolioSection,
    experienceSection,
    messageSection,
  },

  mounted() {
    this.sectionAnchor = [
      this.$refs.titleMain, 
      this.$refs.titleSkill, 
      this.$refs.titlePortfolio, 
      this.$refs.titleExperience,
      this.$refs.titleMessage, 
    ]
  },

  data() {
    return {
      sectionNames: [
        'main', 
        'skill', 
        'portfolio', 
        'experience',
        'message', 
      ],
      sectionAnchor: [],
      sectionData: resumeInfo
    }
  },

  methods: {
    /**
     * * scroll to component title
     */
    scrollToComponent(index) {
      return this.sectionAnchor[index].scrollToHere();
    }
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
  max-width:100%;
  min-height: 100vh;
  background: #e6eaf0;
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
