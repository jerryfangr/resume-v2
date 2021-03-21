<template>
  <div class="dock">
    <div class="container">
      <ul class="dock-icons">
        <li
          v-for="(section, index) in sections"
          :key="section"
          :class="{'icon': true, 'active': index===current, 'active-sibling': isSibling(index)}"
          @mouseenter="activeIcon(index)"
          @mouseleave="activeIcon(-999)"
          @click="scrollTo(index)"
        >
          {{ section }}
        </li>
      </ul>
    </div>
  </div>
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
    activeIcon(index) {
      this.current = index;
    },

    isSibling(index) {
      if (index === this.current - 1 || index === this.current + 1) {
        return true;
      }
      return false;
    },

    scrollTo(index) {
      const section = this.sections[index];
    }
  },
};
</script>

<style lang="scss" scoped>
/* layout */
.dock {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 12vmin;
  .container {
    height: 12vmin;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 0 1vmin 0 rgba(97, 104, 194, 0.37);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: relative;
    overflow: hidden;
    .dock-icons {
      font-size: 0;
      @include abs-layout(center);
      li {
        list-style: none;
        display: inline-block;
      }

      .icon {
        font-size: 50px;
        transition: transform .5s;
        margin-left: 2vmin;
      }

      .icon.active {
        transform: scale(1.5);
      }
      .icon.active-sibling {
        transform: scale(1.2);
      }

    }
  }
}


@media screen and (min-width: 800px) {
}
</style>
