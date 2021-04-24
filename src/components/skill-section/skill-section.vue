<template>
  <section class="skill">
    <div 
      class="skill-item"
      v-for="skill in formatedSkills"
      :key="skill.title"
    >
      <!-- title start -->
      <div class="skill-text title">
        <div class="title-wrapper">{{skill.title}}</div>
        <div class="level">{{skill.level}}</div>
      </div>
      <!-- title end -->

      <!-- description start -->
      <div class="skill-text description">
        <p 
          class="text"
          v-for="(text, index) in skill.description"
          :key="index"
        >
          {{text}}
        </p>
      </div>
      <!-- description end -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    skills: Array
  },

  data() {
    return {}
  },

  computed: {
    formatedSkills() {
      return this.skills.map(skill => {
        skill.description = this.$_resumeUtil.textToList(skill.description);
        return skill;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  section.skill {
    margin-bottom: 7vmin;
    .skill-item {
      background-color: #f4f7f8;
      color: $text-color-title;
      font-weight: 600;
      font-size: 0;
      padding: 1vmin 0;
      box-shadow: 0 0 0.5vmin 1px #d8d2d2;
      transition: all .3s;

      &:nth-child(n+2) {
        margin-top: 3.5vmin;
      }

      &:hover {
        box-shadow: 0 0 2vmin 1px #bebdbd;
      }

      .skill-text {
        float: left;
      }

      .title {
        width: 30%;
        text-align: left;
        text-indent: 2em;
        font-size: 2.8vmin;
        margin: 1vmin 0;
      }

      .description {
        width: 70%;
        font-size: 1.8vmin;
        .text {
          margin: 1vmin 0;
        }
      }

      &::after {
        @include clearFix();
      }
    }
  }

</style>