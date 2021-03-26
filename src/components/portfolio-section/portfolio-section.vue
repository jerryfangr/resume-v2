<template>
  <section class="portfolio">
    <div
      v-for="(portfolio, index) in portfolios"
      :key="index"
      :class="{ 'portfolio-item': true, desc: portfolio.showDesc }"
    >
      <!-- images(preview and qr code) start -->
      <div class="portfolio-info image">
        <img
          :class="{ preview: true, hide: portfolio.showQrCode }"
          src="/test.png"
          key="preview"
        />
        <transition name="slide-appear">
          <img
            v-if="portfolio.showQrCode"
            class="qrcode"
            src="https://z3.ax1x.com/2021/03/25/6qzxYR.png"
            key="qrcode"
          />
        </transition>
      </div>
      <!-- images(preview and qr code) end -->

      <!-- project title start -->
      <div class="portfolio-info title">{{ portfolio.title }}</div>
      <!-- project title end -->

      <!-- source code link start -->
      <a class="portfolio-info btn code-link" :href="portfolio.codeUrl">
        前往源码
      </a>
      <!-- source code link end -->

      <!-- Qr code controll button start -->
      <button
        class="portfolio-info btn qr-button"
        @click="portfolio.showQrCode = !portfolio.showQrCode"
      >
        {{ portfolio.showQrCode ? "隐藏二维码" : "二维码连接" }}
      </button>
      <!-- Qr code controll button end -->

      <!-- Qr code controll button start -->
      <button
        class="portfolio-info btn desc-button"
        @click="portfolio.showDesc = !portfolio.showDesc"
      >
        <span class="text">
          {{ portfolio.showDesc ? "返回简介" : "查看介绍" }}
        </span>
      </button>
      <!-- Qr code controll button end -->

      <!-- project description start -->
      <div v-if="portfolio.showDesc" class="portfolio-info description">
        <ul class="tags">
          <li
            v-for="(tag, index) in portfolio.tags"
            :key="index"
            class="tag-item"
          >
            {{ tag }}
          </li>
        </ul>
        <p
          :style="'animation-delay: ' + index * 0.8 + 's;'"
          class="text animate__animated animate__zoomIn animate__fast"
          v-for="(text, index) in portfolio.description"
          :key="index"
        >
          {{ text }}
        </p>
      </div>
      <!-- project description end -->
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
          previewImage: '预览图片',
          codeUrl: '源码链接',
          previewQRCode: '源码二维码地址',
          tags: ['TypeScript', 'Canvas', 'MVC', 'Webpack', 'tag'],
          description: `
          项目为一个微型游戏盒，目前已基本实现的小游戏有魔塔和flappy bird。
          项目是初步看完TypeScript文档后，实现的第一个TS项目，由webpack配合ts-loader搭建的ts开发环境。
          项目主要把 canvas2D 的图片、文字、画笔、矩形的api和键盘输入的事件监听，封装成了一个简陋的小引擎(单例模式)，并由此开发游戏。
          页面部分，采取MVC的方式拆分管理网页各部分，以及相应的事件监听与数据更新。
          `,
        },
        {
          title: '小小音乐(手机端)',
          previewImage: '预览图片',
          codeUrl: '源码链接',
          previewQRCode: '源码二维码地址',
          tags: ['JavaScript', 'Axios', 'MVC', 'Webpack', 'NodeJs', 'Express'],
          description: `

          `,
        },
        {
          title: '在线简历',
          previewImage: '预览图片',
          codeUrl: '源码链接',
          previewQRCode: '源码二维码地址',
          tags: ['JavaScript', 'Vue', 'Sass', 'Vue-cli'],
          description: `
          一个自适应屏幕的在线简历，包含个人背景、技术栈、作品集、留言板。
          网页样式是拾人牙慧，根据多个dribbble免费模板，重新设计而来。
          项目用vue-cli & sass 搭建开发环境，每一个信息块都为设计为单独组件。
          网页的要渲染的个人信息统一存放到了单独的json文件，便于未来替换在线api的需求。
          留言板使用了 leancloud api存放留言信息。
          `,
        },
        {
          title: 'Gamer聊天室',
          previewImage: '预览图片',
          codeUrl: '源码链接',
          previewQRCode: '源码二维码地址',
          tags: ['Vue', 'Vue-router', 'Vuex', 'Socket.io', 'NodeJs', 'Express'],
          description: `

          `,
        },
        {
          title: '箱',
          previewImage: '预览图片',
          codeUrl: '源码链接',
          previewQRCode: '源码二维码地址',
          tags: ['微信小程序', '云开发', 'uniapp', 'Vue'],
          description: `

          `,
        },
      ],
    };
  },

  beforeMount() {
    this.portfolios.forEach((portfolio, index) => {
      portfolio.description = this.wordWrapFormat(portfolio.description);
      this.$set(portfolio, 'showQrCode', false);
      this.$set(portfolio, 'showDesc', false);
    });
  },

  methods: {
    wordWrapFormat(text) {
      let newTexts = [];
      text.match(/.*\n/gi)?.forEach((content) => {
        const emptyRegExp = /^[\n ]{1,}$/gi;
        if (!emptyRegExp.test(content)) {
          content = content.replace(/\n/gi, '');
          content = content.replace(/^[ ]{1,}/gi, '');
          newTexts.push(content);
        }
      });
      return newTexts;
    },
  },
};
</script>

<style lang="scss" scoped>
section.portfolio {
  padding: 0 4vmin;
  text-align: center;
  .portfolio-item {
    background-color: #f4f7f8;
    color: $text-color-title;
    box-shadow: 0 0 0.5vmin 1px #d8d2d2;
    transition: all 0.5s;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    &:hover {
      box-shadow: 0 0 2vmin 1px #bebdbd;
    }

    .portfolio-info {
      display: inline-block;
      width: 100%;
      overflow: hidden;
    }

    .image {
      position: relative;
      .preview,
      .qrcode {
        width: 100%;
      }

      .preview {
        transition: opacity 0.8s;
        opacity: 1;
        &.hide {
          opacity: 0;
        }
      }

      .qrcode {
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .title {
      color: #010d2b;
      font-weight: 600;
      padding: 2vmin 0;
      font-size: 2.3vmin;
      box-sizing: content-box;
    }

    .btn {
      background-color: #f4f7f8;
      border: 1px solid #cbcdcf;
      color: #41495e;
      font-weight: 600;
      transition: box-shadow 0.7s;
      &:hover {
        color: #0c0f16;
        box-shadow: 0 0 1.2vmin 0 #b3b5b9;
        cursor: pointer;
      }
    }
  }

  .portfolio-item.desc {
    position: relative;
    transition: transform 0.6s;
    transform: rotateY(180deg);
    .portfolio-info {
      display: none;
      transform: rotateY(180deg);
    }

    .description {
      display: inline-block;
      text-align: left;
      text-indent: 2em;
      .tags {
        font-size: 0;
        text-indent: 0;
        .tag-item {
          display: inline-block;
          font-weight: 400;
          color: #fff;
          background: #929294;
          position: relative;
          font-family: Menlo, Monaco, Andale Mono, lucida console, Courier New, monospace;
          &::before {
            content: "";
            background-color: #fff;
            border-radius: 50%;
            box-shadow: 0 0 0.2vmin 0.15vmin rgba(0, 0, 0, .3);
            @include abs-layout(left, 0);
          }
        }
      }
    }

    .desc-button {
      display: inline-block;
      transform: rotateY(0deg);
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .text {
        display: inline-block;
        transform: rotateY(180deg);
      }
    }
  }

  @mixin item-size($scale) {
    .portfolio-item {
      width: 43vmin * $scale;
      height: 67vmin * $scale;
      padding: 4vmin * $scale;
      border-radius: 3vmin * $scale;
      .image {
        width: 35vmin * $scale;
        height: 35vmin * $scale;
      }

      .title {
        padding: 2vmin * $scale 0;
        font-size: 2.3vmin * $scale;
      }

      .btn {
        margin-bottom: 1.6vmin * $scale;
        padding: 1vmin * $scale 2vmin * $scale;
        font-size: 1.7vmin * $scale;
        border-radius: 1vmin * $scale;
      }
    }

    .portfolio-item.desc {
      padding-bottom: 12vmin * $scale;
      .description {
        text-indent: 2em;
        font-size: 2vmin * $scale;
        .text:nth-child(n + 2) {
          margin-top: 1.5vmin * $scale;
        }
        .tags {
          .tag-item {
            font-size: 1.8vmin * $scale;
            margin-bottom: 5px;
            margin-right: 5px;
            box-shadow: 0 0 .2vmin 0 rgba(0, 0, 0, .4);
            text-shadow: 0 0 .2vmin 0 #fff;
            padding: .4vmin * $scale 1vmin * $scale .4vmin * $scale 2.2vmin * $scale;
            &::before {
              left: 1vmin;
              width: 0.5vmin * $scale;
              height: 0.5vmin * $scale;
            }
          }
        }
      }
      .desc-button {
        width: 35vmin * $scale;
        bottom: 2.6vmin * $scale;
      }
    }
  }

  @media screen and (min-width: 550px) {
    $scale: 1;
    @include item-size($scale);
    .portfolio-item {
      &:nth-child(n + 3) {
        margin-top: 4vmin * $scale;
      }

      &:nth-child(2n) {
        margin-left: 5vmin * $scale;
      }
    }
  }

  @media screen and (max-width: 550px) {
    $scale: 1.7;
    @include item-size($scale);
    .portfolio-item {
      text-align: center;
      &:nth-child(n + 2) {
        margin-top: 4vmin * $scale;
      }
    }
    .portfolio-item.desc {
      height: auto;
      min-height: 67vmin * $scale;
    }
  }
}

.slide-appear-enter-active {
  animation: slide-appear 0.6s linear forwards;
}

.slide-appear-leave-active {
  animation: slide-appear 0.6s linear forwards reverse;
}

@keyframes slide-appear {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
