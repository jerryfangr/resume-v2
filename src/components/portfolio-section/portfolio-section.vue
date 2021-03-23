<template>
  <section class="portfolio">
    <div 
      class="portfolio-item"
      v-for="portfolio in formatedportfolios"
      :key="portfolio.title"
    >
      <!-- title start -->
      <div class="portfolio-text title">
        <div class="title-wrapper">{{portfolio.title}}</div>
        <div class="level">{{portfolio.level}}</div>
      </div>
      <!-- title end -->

      <!-- description start -->
      <div class="portfolio-text description">
        <p 
          class="text"
          v-for="(text, index) in portfolio.description"
          :key="index"
        >
          {{text}}
        </p>
      </div>
      <!-- description end -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      portfolios: [
        {
          title: '麦趣游戏盒',
          codeUrl: '源码链接',
          previewUrl: '预览连接',
          previewQRCode: '二维码地址',
          tag: ['TypeScript', 'Canvas', 'MVC', 'Webpack'],
          description: `
          该项目实现了一个微型游戏盒，目前已基本实现的小游戏有魔塔和flappy bird。
          该项目是初步看完TypeScript文档后，实现的第一个TS项目，由webpack配合ts-loader搭建的ts开发环境。
          项目主要把 canvas2D 的图片、文字、画笔、矩形的api和键盘输入的事件监听，封装成了一个简陋的小引擎(单例模式)，并由此开发游戏。
          页面部分，采取MVC的方式各自管理事件与数据更新，最后由入口文件导入MVC组件。
          `
        },
      ]
    }
  },

  methods: {
    wordWrapFormat(text) {
      let newTexts = [];
      text.match(/.*\n/ig)?.forEach(content => {
        const emptyRegExp = /^[\n ]{1,}$/ig;
        if (!emptyRegExp.test(content)) {
          content = content.replace(/\n/ig, '');
          content = content.replace(/^[ ]{1,}/ig, '');
          newTexts.push(content);
        }
      })
      return newTexts;
    }
  },

  computed: {
    formatedportfolios() {
      return this.portfolios.map(portfolio => {
        portfolio.description = this.wordWrapFormat(portfolio.description);
        return portfolio;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  section.portfolio {
    .portfolio-item {
      &:nth-child(n+2) {
        margin-top: 4vmin;
      }
      background-color: #f4f7f8;
      color: $text-color-title;
      font-weight: 600;
      font-size: 0;
      padding: 1vmin 0;
      box-shadow: 0 0 0.5vmin 1px #d8d2d2;
      transition: all .3s;
      &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 2vmin 1px #bebdbd;
      }
      .portfolio-text {
        float: left;
      }
      .title {
        width: 30%;
        text-align: left;
        text-indent: 2em;
        font-size: 2.8vmin;
        margin: 1vmin 0;
      }
      .description {
        width: 70%;
        font-size: 1.8vmin;
        .text {
          margin: 1vmin 0;
        }
      }
      &::after {
        content: "";
        display: block;
        width: 0;
        clear: both;
      }
    }
  }

</style>