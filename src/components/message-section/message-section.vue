<template>
  <section class="message">
    <!-- message form start -->
    <form class="message-form" @submit.prevent="addMessage">
      <div class="tip">留言板</div>
      <input 
        class="input title" 
        type="text" 
        name="title" 
        placeholder="你 的 标 题 ..."
        v-model="inputData.title"
      >
      <textarea 
        class="input content" 
        name="content" 
        placeholder="有什么想告诉我么..."
        v-model="inputData.content"
      ></textarea>
      <button :class="{'button': true, 'submit': isSubmit }" type="submit">提交</button>
    </form>
    <!-- message form end -->

    <!-- message list start -->
    <div class="message-list">
      <div 
        class="message-item"
        v-for="message in messages"
        :key="message.id"
      >
        <!-- message title start -->
        <div class="message-title">
          <div 
            :class="{'title-item message-state': true, 'read': message.read}" 
            :title="message.read? '已读': '未读'"
          >
            <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icon-book"></use>
            </svg>
          </div>

          <div class="title-item title-info">
            <div class="title-content">{{message.title}}</div>
            <div class="title-time">{{message.updatedAt}}</div>
          </div>

          <div class="title-item operation">
            <button class="btn read" v-if="isAdmin">阅读</button>
            <button class="btn edit" v-if="isAdmin || userId === message.userId">编辑</button>
          </div>
        </div>
        <!-- message title end -->

        <!-- message content start -->
        <div class="message-content">
          <p 
            class="text" 
            v-for="(text, index) in message.content"
            :key="index"
          >
            {{text}}
          </p>
        </div>
        <!-- message content end -->
      </div>
    </div>
    <!-- message list end -->
  </section>
</template>

<script>
import AV from 'leancloud-storage';
import config from '@/assets/resume-config';

export default {
  created() {
    AV.init({
      appId: config.av.appId,
      appKey: config.av.appKey,
      serverURL: config.av.serverURL,
    });
    // AV.User.logIn('user', 'test001').then((user) => {}, (error) => {})
    this.$AV = AV;
    this.$Message = AV.Object.extend(this.dbName);

    // temp validation (it's not important)
    if (localStorage.cdscxsedfegrddfuser === 'me123456-skachaskjckobhfciawuobcui') {
      this.isAdmin = true;
    }
    this.userId = localStorage.cdscxsedfegrddfuser || ('cv-userid-lmih51613k-' + Math.random()*100000 + new Date().getTime());
    localStorage.cdscxsedfegrddfuser = localStorage.cdscxsedfegrddfuser || this.userId;

    this.loadData().then(result => {
      result.forEach(response => {
        const message = this.formatData(response);
        this.messages.push(message);
      });
    });
  },

  data() {
    return {
      dbName: 'Message',
      isAdmin: false,
      isSubmit: false,
      userId: '',
      messages: [],
      inputData: {
        title: '',
        content: '',
        read: false,
      }
    }
  },

  methods: {
    log(v) {
      console.log(v);
    },

    loadData() {
      let query = new this.$AV.Query(this.dbName);
      return query.find();
    },

    addData(data) {
      const dataObj = new this.$Message()
      for (const key in data) {
        if (typeof data[key] !== 'function' && key !== 'updatedAt') {
          dataObj.set(key, data[key]);
        }
      }
      return dataObj.save();
    },

    updateData(data) {
      const dataObj = this.$AV.Object.createWithoutData(this.dbName, data.id);
      for (const key in data) {
        if (typeof data[key] !== 'function' && key !== 'updatedAt') {
          dataObj.set(key, data[key]);
        }
      }
      return dataObj.save();
    },

    addMessage(event) {
      if (!this.isSubmit && this.inputData.content.trim() !== '') {
        this.addData(this.inputData).then((data) => {
          this.messages.unshift(this.formatData(data));
        })
      }
    },

    formatData(data) {
      const self = this;
      const message = {...data.attributes, updatedAt: data.updatedAt}
      message.content = this.$_resumeUtil.textToList(message.content);
      message.id = data.id;
      message.save = function() {
        self.updateData(this);
      }
      return message;
    },

    readMessage(index) {
      const message = this.messages[index];
      message.read = true;
      message.save()
    }
  },

}
</script>

<style lang="scss" scoped>
  section.message {
    padding-bottom: 15vmin;
    .message-form {
      background-color: #fff;
      padding: 1.5vmin 2vmin 1vmin 2vmin;
      margin-bottom: 5vmin;
      position: relative;
      color: #000;
      box-shadow: 0 0 1vmin #e0e0e6;
      .tip {
        text-align: center;
        font-size: 1.8vmin;
        padding-bottom: 1vmin;
        font-weight: 600;
        border-bottom: 1px solid #eaeaea;
      }

      .input {
        display: block;
        width: 100%;
      }

      .input.title {
        font-size: 1.65vmin;
        font-weight: 600;
        padding: 1.7vmin 0;
      }

      .input.content {
        resize: none;
        font-size: 1.44vmin;
        font-weight: 400;
        height: 14vmin;
        margin-top: 1vmin;
      }

      .button {
        position: absolute;
        bottom: 2vmin;
        right: 2vmin;
        background-color: #84e4af;
        font-size: 1.5vmin;
        padding: .6vmin 1.7vmin;
        border-radius: .5vmin;
        color: #fcf5f5;
        transition: all .5s;
        &:hover {
          background-color: #66e09d;
          color: #ffffff;
          cursor: pointer;
        }
      }

    }

    .message-list {
      .message-item {
        width: 100vmin;  
        min-height: 25vmin;
        padding: 3vmin;
        background-color: #ffffff;
        box-shadow: 0 0 1vmin #e0e0e6;
        transition: background .4s;

        &:nth-child(n+2) {
          margin-top: 4vmin;
        }

        .message-title {
          height: 11vmin;
          font-size: 0;
          .title-item {
            display: inline-block;
            vertical-align: top;
          }

          .message-state {
            min-width: 8vmin;
            min-height: 8vmin;
            font-size: 5.5vmin;
            
          }

          .title-info {
            width: 72vmin;
            text-align: left;
            padding: 0 2vmin;
            .title-content {
              font-size: 3vmin;
              font-weight: 600;
            }

            .title-time {
              margin-top: 1vmin;
              font-size: 1.5vmin;
              color: #9e9ea5;
            }
          }

          .operation {
            float: right;
            &::after {
              @include clearFix();
            }

            .btn {
              padding: .8vmin 1.3vmin;
              font-size: 1.7vmin;
              border-radius: .5vmin;
              font-weight: 600;
              background-color: #e0e0e9;
              color: #0d0731;
              cursor: pointer;
              &:nth-child(n+2) {
                margin-left: 2vmin;
              }
            }
          }
        }

        .message-content {
          width: 80vmin;
          font-size: 1.8vmin;
          .text:nth-child(n+2) {
            margin-top: .8vmin;
          }
        }
      }
    }

  }
</style>