<template>
  <nav class="dock">
    <div class="container">
      <ul class="dock-icons" @mouseleave="clearIcon">
        <li
          v-for="(section, index) in sections"
          :key="section"
          class="section-icon"
          @mousemove="activeIcon($event, index)"
          @click="scrollTo($event, index)"
          ref="section"
        >
          {{ section }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sections: ["😃", "😊", "😜", "😍", "🤩", "🥳", "🥶"],
      current: -999
    };
  },

  methods: {
    activeIcon(e, index) {
      this.current = index;
      const item = e.target;
      const itemRect = item.getBoundingClientRect();
      const offset = Math.abs(e.clientX - itemRect.left) / itemRect.width;
      
      const prev = item.previousElementSibling || null
      const next = item.nextElementSibling || null
      const defaultScale = 0.4;
      
      if (prev) {
        prev.style.transform = `scale(${1 + defaultScale * Math.abs(offset - 1)}`;
      }
      item.style.transform = `scale(${1 + defaultScale * Math.abs(1 + defaultScale)}`;
      if (next) {
        next.style.transform = `scale(${1 + defaultScale * offset}`;
      }
    },

    clearIcon() {
      this.current = -999;
      this.$refs.section?.forEach(ele => {
        ele.style.transform = '';
      })
    },

    isSibling(index) {
      if (index === this.current - 1 || index === this.current + 1) {
        return true;
      }
      return false;
    },

    scrollTo(e, index) {
      e.target.classList.add('loading');
      // const section = this.sections[index];
    }
  },
};
</script>

<style lang="scss" scoped>
/* layout */
nav.dock {
  display: inline-block;
  width: 100vmin;
  @include abs-layout(bottom, 0);
  position: fixed;
  z-index: 10;
  .container {
    height: 12vmin;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 0 1vmin 0 rgba(97, 104, 194, 0.37);
    backdrop-filter: blur(4px);
    position: relative;
    .dock-icons {
      display: inline-block;
      white-space: nowrap;
      font-size: 0;
      @include abs-layout(center);
      li {
        list-style: none;
        display: inline-block;
      }

      .section-icon {
        margin: 0 .2vmin;
        font-size: 7vmin;
        text-align: center;
        transition: transform .1s;
        &:hover {
          cursor: default;
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

@media screen and (min-width: 800px) {
}
</style>
