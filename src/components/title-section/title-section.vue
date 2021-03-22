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
      color: #3d4451;
      font-size: 4vmin;
      height: 7vmin;
    }
    
  }
</style>