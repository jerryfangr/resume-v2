<template>
  <section class="main">
    <div class="container">
      <!-- about me start -->
      <div class="main-part about">
        <div class="square-box name"></div>
        <div class="square-box work"></div>
        <div class="bubble bubble-top"></div>
        <div class="bubble bubble-bottom"></div>
      </div>
      <!-- about me end -->

      <!-- header image start -->
      <div class="main-part avatar">
        <div class="bubble bubble-center"></div>
      </div>
      <!-- header image end -->

      <!-- more about me (website) start -->
      <div class="main-part more"></div>
      <!-- more about me (website) end -->
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
/* variable */
@mixin bubble($size: 2vmin, $delay: 0s) {
  width: $size;
  height: $size;
  border-radius: 50%;
  background: rgb(214,222,234);
  background: linear-gradient(315deg, #ddd 0%, #ccd3dd 35%, #edf2f8 80%, #edf2f8 100%);
  box-shadow: 2px 2px $size*0.03 $size*0.01 #edf2f8;
  animation: breath-scale 2s ease-in-out infinite $delay alternate-reverse;
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
  width: 100vw;
  height: 100vh;
  .container {
    border-radius: 0.2vmin;
    background: #ecf1f8;
    box-shadow: 0 0 3vmin 0.1vmin #ccd1d8;
    overflow: hidden;
    .main-part {
      position: relative;
    }
  }
}

@media screen and (min-width: 800px) {
  /* layout */
  section.main {
    .container {
      @include abs-layout(top, 7vmin);
      width: 100vmin;
      height: 63vmin;
      .main-part {
        height: 100%;
        float: left;
      }

      .about {
        width: 28.4%;
      }

      .avatar {
        width: 44.4%;
      }

      .more {
        width: 27.2%;
      }

      &::after {
        content: "";
        display: block;
        clear: both;
      }
    }
  }

  /* style */
  section.main {
    .container .bubble {
      position: absolute;
    }

    .container .about {
      .bubble-top {
        top: 60%;
        left: 30%;
        @include bubble(6vmin, .5s)
      }
      .bubble-bottom {
        bottom: -0.5vmin;
        right: 0;
        @include bubble(12vmin, 1s)
      }
    }

    .container .avatar {
      .bubble-center {
        top: 9.3vmin;
        @include bubble(44.4vmin, .8s)
      }

    }
  }
}
</style>