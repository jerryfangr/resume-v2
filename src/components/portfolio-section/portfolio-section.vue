<template>
  <section class="portfolio">
    <div
      v-for="(portfolio, index) in portfolios"
      :key="index"
      :class="{ 'portfolio-item': true, desc: portfolio.showDesc }"
    >
      <div class="container">
        <!-- images(preview and qr code) start -->
        <div class="portfolio-info image">
          <img
            :class="{ preview: true, hide: portfolio.showQrCode }"
            :src="portfolio.previewUrl"
            key="preview"
          />
          <transition name="slide-appear">
            <img
              v-if="portfolio.showQrCode"
              class="qrcode"
              :src="portfolio.qRCodeUrl"
              key="qrcode"
            />
          </transition>
          <button
            class="desc-button"
            @click="portfolio.showDesc = !portfolio.showDesc"
          >
            <span class="text">
              {{ portfolio.showDesc ? "返回简介" : "查看介绍" }}
            </span>
          </button>
        </div>
        <!-- images(preview and qr code) end -->

        <!-- project title start -->
        <div class="portfolio-info title">{{ portfolio.title }}</div>
        <!-- project title end -->

        <!-- source code link start -->
        <a class="portfolio-info code-link" :href="portfolio.codeUrl">
          前往源码
        </a>
        <!-- source code link end -->

        <!-- Qr code controll button start -->
        <button
          class="portfolio-info bottom-btn qr-button"
          @click="portfolio.showQrCode = !portfolio.showQrCode"
        >
          {{ portfolio.showQrCode ? "隐藏二维码" : "二维码连接" }}
        </button>
        <!-- Qr code controll button end -->

        <!-- Qr code controll button start -->
        <button
          v-if="portfolio.showDesc"
          class="portfolio-info bottom-btn back-button"
          @click="portfolio.showDesc = !portfolio.showDesc"
        >
          <span class="text">&lt; 返回</span>
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
            :style="'animation-delay: ' + (index * 0.8 + 0.6) + 's;'"
            class="text animate__animated animate__zoomIn animate__fast"
            v-for="(text, index) in portfolio.description"
            :key="index"
          >
            {{ text }}
          </p>
        </div>
        <!-- project description end -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    portfolios: Array
  },

  data() {
    return {
    };
  },

  beforeMount() {
    this.portfolios.forEach((portfolio, index) => {
      portfolio.description = this.$_resumeUtil.textToList(portfolio.description);
      this.$set(portfolio, 'showQrCode', false);
      this.$set(portfolio, 'showDesc', false);
    });
  },
};
</script>

<style lang="scss" scoped>
section.portfolio {
  text-align: left;

  .portfolio-item {
    display: inline-block;
    vertical-align: top;
    width: 50vmin;
    max-width: 50%;
    margin-bottom: 4vmin;

    .container {
      display: inline-block;
      background-color: #f9f9f9;
      width: 48vmin;
      height: 47vmin;
      transition: all 0.5s;
      box-shadow: 0 0 2vmin 1px #bebdbd;

      .bottom-btn {
        display: block;
        text-align: center;
        width: 100%;
        padding: 2.2vmin 0;
        font-weight: 600;
        font-size: 2.3vmin;
        color: #24b14d;
        transition: color .3s;
        &:hover {
        color: #17cc4a;
        }
      }

      .portfolio-info.image {
        display: block;
        width: 100%;
        height: 25.5vmin;
        position: relative;
        overflow: hidden;

        .preview, .qrcode {
          width: 100%;
          height: 100%;
        }

        .qrcode {
          position: absolute;
          top: 0;
          right: 0;
          width: auto;
        }

        .desc-button {
          position: absolute;
          font-size: 1.7vmin;
          left: 6%;
          bottom: 8%;
          padding: 1vmin 1.3vmin;
          font-weight: 600;
          transition: all .3s;
          // border: 1px solid #022444;
          // color: #022444;
          border: 2px solid #e3ebf3;
          color: #eff3f7;
          
          &:hover {
            box-shadow: 0 0 .5vmin 0 #264472;
            // color: #dbe6f1;
            border-color: #73b7f7;
          }
        }
      }

      .portfolio-info.title {
        padding: 3vmin;
        font-size: 2.3vmin;
        font-weight: 600;
      }

      .portfolio-info.code-link {
        display: inline-block;
        padding: 0vmin 3vmin 2vmin 3vmin;
        font-size: 1.85vmin;
        transition: all .3s;
        font-weight: 600;
        color: #1e1042;
        &:hover {
          color: #1a80e0;
        }
      }
      .portfolio-info.qr-button {
        border-top: 2px solid #f0f0f3;
      }
    }
  }

  .portfolio-item.desc {
    .container {
      position: relative;
      height: auto;
      min-height: 47vmin;
      padding: 1vmin 2vmin;
      padding-bottom: 10vmin;
      transition-duration: .6s;
      transition-property: transform box-shaodw;
      transform: rotateY(180deg);
      .portfolio-info {
        display: none;
        transform: rotateY(180deg);
      }

      .portfolio-info.back-button {
        display: block;
        width: 100%;
        position: absolute;
        border-top: 2px solid #f0f0f3;
        left: 0;
        bottom: 0;
    }
  
      .description {
        display: inline-block;
        text-indent: 2em;
        font-size: 2vmin;
        .text:nth-child(n + 2) {
          margin-top: 1.5vmin;
        }
  
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
            font-size: 1.8vmin;
            margin-bottom: 5px;
            margin-right: 5px;
            box-shadow: 0 0 .2vmin 0 rgba(0, 0, 0, .4);
            text-shadow: 0 0 .2vmin 0 #fff;
            padding: .4vmin 1vmin .4vmin 2.2vmin;

            &::before {
              content: "";
              background-color: #fff;
              border-radius: 50%;
              box-shadow: 0 0 0.2vmin 0.15vmin rgba(0, 0, 0, .3);
              @include abs-layout(left, 0);
              left: 1vmin;
              width: 0.5vmin;
              height: 0.5vmin;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 560px) {
    $scale: 1;
    .portfolio-item {
      &:nth-child(2n) {
        text-align: right;
      }
    }
  }

  @media screen and (max-width: 560px) {
    .portfolio-item.desc {
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
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
