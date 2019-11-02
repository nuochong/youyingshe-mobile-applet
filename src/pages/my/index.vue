<template>
  <div class="my-container">

    <!-- <div class="my-wrap-empty">
      <img class="my-empty" src="/static/images/empty.png" />
      <article-write-btn></article-write-btn>
      <button class="btn btn-success">
        <i class="iconfont iconweixin"></i>
        微信一键登录</button>
      <button class="btn btn-primary" @click="targetLogin()">已有简书账号登录</button>
    </div> -->
    <div class="my-wrap-setting">
      <div class="my-info">
        <div class="avator">
          <img
            src="https://upload.jianshu.io/users/upload_avatars/17593283/1417dbeb-1561-4a6f-b15a-032f74913f35.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180/format/webp"
            alt="">
        </div>
        <div class="clear"></div>
        <div class="name">用户名</div>
      </div>
      <ul class="setting-list">
        <li class="setting-list-li" @click="targetHistory()">
          <div class="setting-list-liWrap">
            <i class="iconfont iconhistory setting-list-img"></i>
            <span>最近阅读的记录</span>
            <i class="iconfont iconleft"></i>
          </div>
        </li>
        <li class="setting-list-li" @click="targetLike()">
          <div class="setting-list-liWrap">
            <i class="iconfont iconhome_ico_like- setting-list-img"></i>
            <span>喜欢文章</span>
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
    targetLogin() {
      wx.navigateTo({ url: '/pages/login/main' });
    },
    targetHistory(){
      wx.navigateTo({ url: '/pages/history/main' });
    },
    targetLike(){
      wx.navigateTo({ url: '/pages/like/main' });
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.clear {
  clear: both;
  display: inline-block;
}
.my-container {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #dfdfdf;
  .my-wrap-empty {
    text-align: center;
    padding: 0px 15px;
    background-color: white;
    height: 100%;
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
    // background-color: #dfdfdf;
    height: 100%;
    margin-bottom: 15px;
    box-sizing: border-box;
    .my-info {
      background-color: white;
      padding: 15px;
      margin: 15px 0;
      box-sizing: border-box;
      .avator {
        margin-right: 15px;
        float: left;
        img {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          font-size: 0;
        }
      }
      .name {
        height: 50px;
        line-height: 50px;
        margin-left: 5px;
        font-size: 16px;
        display: inline-block;
        font-weight: bold;
      }
    }
    .setting-list {
      position: relative;
      width: 100%;
      padding-left: 0;
      list-style-type: none;
      background-color: white;
      li {
        position: relative;
        width: 100%;
        word-wrap: break-word;
        padding: 15px 18px;
        margin: 0;
        border-bottom: 1px solid;
        font-size: 0;
        border-color: #f0f0f0;
        box-sizing: border-box;
        .setting-list-liWrap {
          display: flex;
          color: rgb(96, 96, 96);
          font-size: 14px;
          .setting-list-img {
            width: 30px;
          }
          span {
            flex: 1;
            font-size: 14px;
          }
          .iconleft {
            font-size: 14px;
            width: 15px;
          }
        }
      }
    }
  }
  .change-login {
    padding: 15px;
    color: gray;
    text-align: center;
  }
}
</style>
