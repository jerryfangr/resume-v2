<template>
  <section class="skill">
    <div 
      class="skill-item"
      v-for="skill in formatedSkills"
      :key="skill.title"
    >
      <!-- title start -->
      <div class="skill-text title">
        <div class="title-wrapper">{{skill.title}}</div>
        <div class="level">{{skill.level}}</div>
      </div>
      <!-- title end -->

      <!-- description start -->
      <div class="skill-text description">
        <p 
          class="text"
          v-for="(text, index) in skill.description"
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
      skills: [
        {
          title: 'HTML & CSS',
          level: '★★★★★',
          description: `
          熟悉 HTML5与标签语义化 nav、header、main、section、footer等。
          熟悉 css 预处理 sass、less，css3 动画、过度效果、flex盒子、媒体查询等。
          能独立根据设计稿实现网页布局与样式制作。
          `
        },
        {
          title: 'JavaScript',
          level: '★★★★★',
          description: `
          熟悉 JavaScript基础语法与特性，如作用域、闭包、原型、原型链、异步等。
          熟悉 dom与bom常见api、ajax。
          熟悉 es6、es7等新语法与新特性，如promise(async)、generator、class、解构等。
          `
        },
        {
          title: 'TypeScript',
          level: '★★★★',
          description: `
          熟悉 TypeScript扩展语法与特性，如元组、Void、Never、泛型、断言。
          熟悉 面向对象的继承、封装(private、protect、public)、多态(接口，抽象类)。
          能使用纯TypeScript开发网页应用。
          `
        },
        {
          title: 'Vue',
          level: '★★★★',
          description: `
          熟悉 vue基础语法与特性，如生命周期、模板语法、组件通信、计算属性、过滤器等。
          熟悉 vue拓展生态 vue-router和vuex，熟练使用vue-cli脚手架开发应用。
          了解 vue3 部分新特性 如Proxy来代理数据、Composition API、Fragments等
          `
        },
        {
          title: '小程序',
          level: '★★★★',
          description: `
          熟悉 微信小程序原生语法与云开发(函数、数据库、存储)，
          熟悉 微信小程序特点 如：dom api缺失、导航栏配置、page、组件通信、监听等
          熟悉 uniapp框架下通过vue语法开发小程序，能熟练使用flex布局。
          `
        },
        {
          title: '移动端',
          level: '★★★★',
          description: `
          熟悉 移动端适配样式的方式，如 rem、vw/vh/vmin/vmax、媒体查询等。
          熟悉 手机端特殊的dom api，如 touch 相关操作，真机vconsole调试。
          熟悉 手机端事件，如滑动、长按。
          `
        },
        {
          title: '工具',
          level: '★★★★',
          description: `
          熟悉 webpack打包工具与常见loader与插件的配置。
          熟悉 常见配置 如babel、corejs、postcss、less/sass、css、style等。
          熟悉 commonjs和es6 module规范。
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
    formatedSkills() {
      return this.skills.map(skill => {
        skill.description = this.wordWrapFormat(skill.description);
        return skill;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  section.skill {
    margin-bottom: 7vmin;
    .skill-item {
      background-color: #f4f7f8;
      color: $text-color-title;
      font-weight: 600;
      font-size: 0;
      padding: 1vmin 0;
      box-shadow: 0 0 0.5vmin 1px #d8d2d2;
      transition: all .3s;

      &:nth-child(n+2) {
        margin-top: 3.5vmin;
      }

      &:hover {
        box-shadow: 0 0 2vmin 1px #bebdbd;
      }

      .skill-text {
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
        @include clearFix();
      }
    }
  }

</style>