<template>
<section class="experience">
  <ul class="timeline">
    <li class="experience-item show" v-for="(ep, index) in experience" :key="index">
      <div class="wrapper">
        <title>{{ ep.title }}</title> 
        {{ ep.description }}
      </div>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  props: {
    experience: Array
  },

}
</script>

<style lang="scss" scoped>
section.experience {
  font: normal 16px/1.5 "Helvetica Neue", sans-serif;
  color: #4a525e;
  $box-color: #dae2ed;

  .timeline {
    background: #edf2f8;
    padding: 50px 0;
    box-shadow: 0 0 10px 0 #e2dbdb;

    .experience-item {
      position: relative;
      width: 6px;
      margin: 0 auto;
      padding-top: 50px;
      background: #fff;

      &.show {
        &::after {
          background: $box-color;
        }

        .wrapper {
          transform: none;
          visibility: visible;
          opacity: 1;
        }
      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: inherit;
        transition: background .5s ease-in-out;
      }

      .wrapper {
        position: relative;
        bottom: 0;
        width: 360px;
        padding: 15px;
        background: $box-color;
        visibility: hidden;
        opacity: 0;
        transition: all .5s ease-in-out;

        &::before {
          content: '';
          position: absolute;
          bottom: 7px;
          width: 0;
          height: 0;
          border-style: solid;
        }

        title {
          display: block;
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 8px;
        }
      }

      &:nth-child(odd) .wrapper {
        left: 45px;
        transform: translate3d(20px, 0, 0);

        &::before {
          left: -15px;
          border-width: 8px 16px 8px 0;
          border-color: transparent $box-color transparent transparent;
        }
      }

      &:nth-child(even) .wrapper {
        left: -400px;
        transform: translate3d(-20px, 0, 0);

        &::before {
          right: -15px;
          border-width: 8px 0 8px 16px;
          border-color: transparent transparent transparent $box-color;
        }
      }
      
    }
  }

  @media screen and (max-width: 920px) {
    .timeline .experience-item {
      .wrapper {
        width: calc(50vw - 100px);
      }

      &:nth-child(even) .wrapper {
        left: calc(-50vw + 100px - 40px);
      }
    }
  }

  @media screen and (max-width: 600px) {
    .timeline .experience-item {
      margin-left: 20px;

      .wrapper {
        width: calc(100vw - 150px);
      }

      &:nth-child(even) .wrapper {
        left: 85px;

        &::before {
          left: -15px;
          border-width: 8px 16px 8px 0;
          border-color: transparent $box-color transparent transparent;
        }
      }

    }
  }
}

</style>