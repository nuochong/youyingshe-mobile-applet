<template>
  <div class="my-container">
    <!-- <div class="my-wrap-empty">
      <img class="my-empty" src="/static/images/empty.png" />
      <article-write-btn></article-write-btn>
      <button class="btn btn-success">
        <i class="iconfont iconweixin"></i>
        微信一键登录</button>
      <button class="btn btn-primary">已有简书账号登录</button>
    </div> -->
    <div class="my-wrap-setting">
      <div class="my-info">
        <div class="avator">
          <img src="https://upload.jianshu.io/users/upload_avatars/17593283/1417dbeb-1561-4a6f-b15a-032f74913f35.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180/format/webp" alt="">
        </div>
        <div class="name">用户名</div>
      </div>
      <ul class="setting-list">
        <li class="setting-list-li">
          <div class="setting-list-liWrap">
            <i class="iconfont iconhistory"></i>
            <span>最近阅读的记录</span>
            <i class="iconfont iconleft"></i>
          </div>
        </li>
      </ul>
      <div class="change-login">
        <span class="change-login-text">
          切换账号
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import articleWriteBtn from '@/components/article-write-btn';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    articleWriteBtn
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.my-container {
  text-align: center;
  .my-wrap-empty {
    padding: 0px 15px;
    .my-empty {
      height: 240px;
      width: 240px;
      margin-top: 80px;
    }
    .btn-primary {
      background-color: #f8f8f8;
      &:hover {
        color: rgba(0, 0, 0, 0.6);
        background-color: #dedede;
      }
    }
    .btn-success {
      background-color: #07c160;
      color: white;
      &.button-hover {
        background-color: #06ad56 !important;
      }
    }
  }
  .my-wrap-setting {

  }
}
</style>
