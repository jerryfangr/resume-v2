<template>
  <section class="message">
    <form>
      <input type="text" name="author">
      <input type="text" name="message">
      <button type="submit">提交</button>
    </form>
    <div class="message-list">
      <div class="message-item">
        <div class="message-author"></div>
        <div class="message-content"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  section.message {

  }
</style>