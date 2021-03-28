<template>
  <section class="title" ref="title">
    <h2 class="text"><slot></slot></h2>
  </section>
</template>

<script>
import VueScrollTo from 'vue-scrollto';

export default {
  methods: {
    scrollToHere() {
      return new Promise((resove, reject) => {
        VueScrollTo.scrollTo(this.$refs.title, 1000, {
          easing: 'ease-in-out',
          onDone: function(element) {
            resove('done');
          },
          onCancel: function() {
            resove('cancel');
          },
        });
      });
    }
  }
}
</script>

<style lang="scss">
  section.title {
    margin: 5vmin auto;
    text-align: left;
    .text {
      color: $text-color-title;
      font-size: 4vmin;
      text-shadow: 1px 1px 1px $text-color-title;
    }
    
  }
</style>