<template>
  <section class="main">
    <div class="container">
      <!-- about me start -->
      <div class="main-part about">
        <!-- message box start -->
        <div v-if="timer > 0" class="message-box name animate__animated animate__bounceIn animate__faster">
          <div class="title">嘿! 你好啊! 我是</div>
          <div class="content">{{ user.name }}</div>
        </div>

        <div v-if="timer > 1" class="message-box school animate__animated animate__bounceIn animate__faster">
          毕业于 {{ user.school }}
        </div>

        <div v-if="timer > 2" class="message-box age animate__animated animate__bounceIn animate__faster">
          年龄: {{ user.age }}岁
        </div>

        <div v-if="timer > 3" class="message-box gender animate__animated animate__bounceIn animate__faster">
          性别: {{ user.gender }}
        </div>

        <div v-if="timer > 4" class="message-box work animate__animated animate__bounceIn animate__faster">
          求职方向 {{ user.work }}
        </div>

        <div
          v-if="timer > 5"
          class="message-box mail animate__animated animate__bounceIn animate__faster"
          title="点击复制邮箱"
          @click="copyToClipboard(user.mail)"
        >
          单击拷贝邮箱: {{ user.mail }}
        </div>
        <!-- message box end -->

        <!-- bubble start -->
        <div class="bubble bubble-top"></div>
        <div class="bubble bubble-bottom"></div>
        <!-- bubble end -->
      </div>
      <!-- about me end -->

      <!-- header image start -->
      <div class="main-part avatar">
        <div class="bubble bubble-center">
          <img class="image" :src="avatar"/>
        </div>
      </div>
      <!-- header image end -->

      <!-- more about me (website) start -->
      <div class="main-part more">
        <!-- website icon start -->
        <a
          class="circle-link github"
          :href="user.github"
          target="_blank"
          title="github"
        >
          <div class="wrapper">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github"></use>
            </svg>
          </div>
        </a>

        <a
          class="circle-link blog"
          :href="user.blog"
          target="_blank"
          title="blog"
        >
          <div class="wrapper">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-blog"></use>
            </svg>
          </div>
        </a>
        <!-- website icon end -->

        <!-- message box start -->
        <div v-if="timer > 6" class="message-box tip animate__animated animate__bounceIn animate__faster">
          ↑GitHub 和 ↓博客
        </div>
        <!-- message box start -->

        <!-- bubble start -->
        <div class="bubble bubble-top"></div>
        <div class="bubble bubble-bottom"></div>
        <!-- bubble end -->
      </div>
      <!-- more about me (website) end -->
    </div>
  </section>
</template>

<script>
import imageAvatar from '@/assets/avatar.png';

export default {
  props: {
    user: Object
  },
  data() {
    return {
      timer: 0,
      avatar: imageAvatar,
    };
  },

  mounted() {
    const delay = 500;
    var timerId = setInterval(() => {
      this.timer++;
      if (this.timer >= 100) {
        clearInterval(timerId);
      }
    }, delay);
  },

  methods: {
    copyToClipboard(content) {
      const ele = document.createElement('input'); 
      ele.setAttribute('value', content); 
      document.body.appendChild(ele); 
      ele.select(); 
      document.execCommand('copy'); 
      document.body.removeChild(ele);
    },
  },
};
</script>

<style lang="scss" scoped>
/* variable */
@mixin bubble($size: 2vmin, $delay: 0s, $active: auto) {
  width: $size;
  height: $size;
  border-radius: 50%;
  background: #d3dbe7;
  background: linear-gradient(315deg, #d0d9e6 0%, #e7edf5 50%, #edf2f8 100%);
  box-shadow: 2px 2px $size * 0.03 $size * 0.01 #edf2f8;
  @if $active == hover {
    &:hover {
      animation: breath-scale 2s ease-in-out infinite $delay alternate-reverse;
    }
  } @else if $active == auto {
    animation: breath-scale 2s ease-in-out infinite $delay alternate-reverse;
  }
}

@keyframes breath-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* layout */
section.main {
  position: relative;

  .container {
    height: 100%;
    width: 100%;
    border-radius: 0.2vmin;
    overflow: hidden;
  }
}

/* style */
section.main {
  .container {
    background: #edf2f8;
    box-shadow: 0 0 3vmin 0.1vmin #ccd1d8;

    .message-box {
      display: inline-block;
      position: absolute;
      z-index: 2;
      padding: 1.4vmin 2vmin;
      border-radius: 1.5vmin;
      background: #fff;
      box-shadow: 0 0.5vmin 0.2vmin 0.1vmin #eaedf1;
      font-size: 1.5vmin;
      font-weight: 600;
      color: #3d4451;

      .title {
        color: #bbb;
      }

      .content {
        margin-top: 3px;
        font-size: 3vmin;
        font-weight: 600;
        margin-left: 4vmin;
      }
    }

    .circle-link {
      display: inline-block;
      .wrapper {
        display: inline-block;
        transition: all 0.5s;
        &:hover {
          box-shadow: 0 0 2vmin 0.2vmin #adb7c5;
          transform: scale(1.1);
        }

        width: 6vmin;
        height: 6vmin;
        background-color: #f7f6f6;
        box-shadow: 0 0 1vmin 1px #ddd;
        border-radius: 50%;
        text-align: center;
        position: relative;
        svg.icon {
          @include abs-layout(center);
        }
      }
    }
  }
}

@media screen and (min-width: 500px) {
  section.main {
    height: 63vmin;
    .container {
      .main-part {
        position: relative;
        height: 100%;
        float: left;
      }

      .bubble {
        position: absolute;
        transition: all 0.5s;
      }

      .main-part.about {
        width: 28.4%;
        .bubble-top {
          top: 60%;
          left: 30%;
          @include bubble(6vmin, 0.5s);
        }

        .bubble-bottom {
          bottom: -0.5vmin;
          right: 0;
          @include bubble(12vmin, 1s);
        }

        .message-box.name {
          top: 4vmin;
          left: 2vmin;
        }

        .message-box.school {
          top: 15vmin;
          right: -1vmin;
        }

        .message-box.age {
          top: 21.5vmin;
          left: 2vmin;
        }

        .message-box.gender {
          top: 27vmin;
          right: 2vmin;
        }

        .message-box.work {
          top: 33vmin;
          left: 2vmin;
        }

        .message-box.mail {
          bottom: 13vmin;
          right: 1vmin;
          cursor: pointer;
        }
      }

      .main-part.avatar {
        width: 44.4%;
        .bubble-center {
          top: 4.7vmin;
          left: -2.3vmin;
          @include bubble(50vmin, 0s, no);
          overflow: hidden;
          .image {
            width: 95%;
            height: auto;
            @include abs-layout(center);
            z-index: 1;
          }
        }
      }

      .main-part.more {
        width: 27.2%;

        .message-box.tip {
          top: 25vmin;
          left: 5vmin;
        }

        .bubble-bottom {
          bottom: 10%;
          left: 0;
          @include bubble(5vmin, 0s);
        }

        .bubble-top {
          top: 5%;
          left: 0;
          @include bubble(9vmin, 0s);
        }

        .circle-link {
          position: absolute;
          .wrapper {
            width: 8vmin;
            height: 8vmin;
            font-size: 6vmin;
            color: #313e55;
          }

          &.github {
            top: 15vmin;
            left: 5vmin;
          }

          &.blog {
            .wrapper {
              width: 12vmin;
              height: 12vmin;
              font-size: 8vmin;
            }

            top: 32vmin;
            left: 6vmin;
          }
        }
      }

      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  section.main {
    height: 80vmin;
    .container {
      .bubble {
        display: none;
      }

      .message-box {
        font-size: 1.3vmin;
        .content {
          font-size: 4.5vmin;
          margin-left: 6vmin;
        }
      }

      .main-part.about {
        .message-box.name {
          top: 2vmin;
          left: 2vmin;
        }

        .message-box.school {
          top: 18vmin;
          left: 2vmin;
        }

        .message-box.age {
          top: 28vmin;
          left: 13vmin;
        }

        .message-box.gender {
          top: 37vmin;
          left: 2vmin;
        }

        .message-box.work {
          top: 37vmin;
          right: 2vmin;
        }

        .message-box.mail {
          bottom: 0.2vmin;
          left: 0;
          right: 0;
          margin: auto;
          max-width: 18em;          
          cursor: pointer;
        }
      }

      .main-part.avatar {
        .bubble-center {
          display: block;
          top: 4.7vmin;
          left: -2.3vmin;
          @include bubble(70vmin, 0s, no);
          @include abs-layout(center);
          transition: all 0.5s;
          overflow: hidden;
          .image {
            width: 95%;
            height: auto;
            @include abs-layout(center);
            z-index: 1;
          }
        }
      }

      .main-part.more {
        .message-box.tip {
          display: none;
        }

        .circle-link {
          position: absolute;
          bottom: 3%;
          .wrapper {
            width: 12vmin;
            height: 12vmin;
            font-size: 8vmin;
            color: #313e55;
          }

          &.github {
            left: 3%;
          }

          &.blog {
            right: 3%;
          }
        }
      }
    }
  }
}

</style>