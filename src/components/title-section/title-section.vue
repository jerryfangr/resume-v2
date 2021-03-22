<template>
  <section class="title">
    <h2 class="text"><slot></slot></h2>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  section.title {
    text-align: left;
    .text {
      color: $text-color-title;
      font-size: 4vmin;
      text-shadow: 1px 1px 1px $text-color-title;
      height: 7vmin;
    }
    
  }
</style>