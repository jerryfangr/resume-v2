<template>
  <nav class="dock">
    <div class="container">
      <ul class="dock-icons" @mouseleave="clearIcon">
        <li
          class="section-icon"
          v-for="(name, index) in sectionNames"
          :key="index"
          @mousemove="activeIcon($event, index)"
          @click="scrollTo($event, index)"
          ref="section"
        >
          <div class="wrapper">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#icon-' + name"></use>
            </svg>

            <div class="name">{{ name }}</div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    scrollToComponent: Function,
    sectionNames: Array
  },
  
  data() {
    return {
      current: -999
    };
  },

  methods: {
    /**
     * TODO: hover animation(scale icon), The closer the distance, the bigger the icon
     */
    activeIcon(e, index) {
      // this.current = index;
      // const item = e.target;
      // const itemRect = item.getBoundingClientRect();
      // const offset = Math.abs(e.clientX - itemRect.left) / itemRect.width;
      
      // const prev = item.previousElementSibling || null
      // const next = item.nextElementSibling || null
      // const defaultScale = 0.4;
      
      // if (prev) {
      //   prev.style.transform = `scale(${1 + defaultScale * Math.abs(offset - 1)}`;
      // }
      // item.style.transform = `scale(${1 + defaultScale * Math.abs(1 + defaultScale)}`;
      // if (next) {
      //   next.style.transform = `scale(${1 + defaultScale * offset}`;
      // }
    },

    /**
     * * clear style
     */
    clearIcon() {
      this.current = -999;
      this.$refs.section?.forEach(ele => {
        ele.style.transform = '';
      })
    },

    /**
     * * check is Sibling element
     */
    isSibling(index) {
      if (index === this.current - 1 || index === this.current + 1) {
        return true;
      }
      return false;
    },

    /**
     * * add scroll animation
     */
    scrollTo(e, index) {
      const target = e.currentTarget;
      target.classList.add('loading');
      this.scrollToComponent(index).then(() => {
        target.classList.remove('loading');
      });
    }
  },
};
</script>

<style lang="scss" scoped>
/* layout */
nav.dock {
  @include abs-layout(bottom, 0);
  max-width: 100vmin;
  position: fixed;
  z-index: 10;
  text-align: center;

  .container {
    display: inline-block;
    height: 12vmin;
    padding: 1vmin 4vmin;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 0 1vmin 0 rgba(97, 104, 194, 0.37);
    backdrop-filter: blur(4px);

    .dock-icons {
      display: inline-block;
      white-space: nowrap;
      font-size: 0;

      .section-icon {
        display: inline-block;
        text-align: center;
        position: relative;

        .wrapper {
          transition: all .1s;
          width: 13vmin;
          height: 10vmin;
          font-size: 7vmin;
          position: relative;

          svg.icon {
            @include abs-bottom(2.8vmin);
          }

          .name {
            @include abs-bottom();
            font-size: 2.2vmin;
            font-weight: 600;
          }
        }

        &:hover {
          cursor: pointer;

          .wrapper {
            font-size: 9vmin;

            svg.icon {
              @include abs-bottom(3.5vmin);
            }
            .name {
              font-size: 2.5vmin;
            }
          }
        }

        &:nth-child(n+2) {
          margin-left: 2vmin;
        }
      }

      .section-icon.loading {
        animation: .9s loading ease-in-out infinite;
      }
    }
  }
}

@keyframes loading {
  0%, 100% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-22%);
  }
}
</style>
