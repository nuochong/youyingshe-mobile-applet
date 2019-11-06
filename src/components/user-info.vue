<template>
  <div class="user-info">
    <div class="background">
      <img src="/static/images/img-user-background-image-default.a89eb3a3.jpg" />
    </div>
    <div class="user-content">
      <div class="avatar">
        <img src="/static/images/7374b10ccc30.webp" />
      </div>
      <div class="author-info">
        <div class="name">琢磨自留地</div>
        <div class="follow-meta">
          <span>33</span>
          关注
          <span class="last">609</span>
          粉丝
          <span class="last">123.943</span>
          总资产
        </div>
      </div>
      <div class="intro">
        写写画画，精神世界的种子需要一块地来耕种~我已委托“维权骑士”（rightnights.com）为我
        <i class="iconfont ic-show" />
      </div>
      <div class="author-meta">写了9.5万字，获得了1204个喜欢</div>
      <div class="btn-group">
        <button class="follow-btn user-follow-button follow">
          <i class="iconfont iconadd" />
          关注
        </button>
        <button class="btn-money reward-btn">
          赞赏作者
        </button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['text']
};
</script>

<style lang="scss" scoped>
/* UserInfo */
.user-info {
  .background {
    img {
      width: 100%;
      margin-top: -4vh;
      opacity: 0.85;
    }
  }
  .user-content {
    padding: 0 18px;
    .avatar {
      position: relative;
      margin: -35px 15px 0 -4px;
      float: left;
      border-radius: 50px;
      border: 3px solid;
      background-color: #fff;
      border-color: #fff;
      img {
        width: 84px;
        height: 84px;
        border-radius: 50px;
        border: 1px solid;
        border-color: #ddd;
      }
    }
    .author-info {
      margin: 15px 0 20px;
      padding-left: 101px;
      .name {
        font-size: 19px;
        font-weight: 700;
        display: inline-block;
        vertical-align: middle;
        line-height: 1.3;
        color: #484848;
      }
      .follow-meta {
        margin-top: 10px;
        font-size: 14px;
        line-height: 1;
        color: #969696;
        span {
          font-size: 16px;
          color: #333;
          &:not(:first-child) {
            margin-left: 10px;
          }
        }
      }
    }
    .intro {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 20px;
      color: #484848;
    }
    .author-meta {
      margin-bottom: 15px;
      font-size: 14px;
      color: #969696;
    }
    .btn-group {
      margin-bottom: 20px;
      .user-follow-button {
        height: 40px;
        display: inline-block;
        border-radius: 4px;
        text-align: center;
        padding: 6px 0;
        font-size: 16px;
        width: -webkit-calc(50% - 10px);
        width: calc(50% - 10px);
      }
      .follow {
        background-color: #42c02e;
        border: 1px solid #42c02e;
        color: #fff;
      }
      .btn-money {
        height: 40px;
        line-height: 40px;
        display: inline-block;
        border-radius: 4px;
        text-align: center;
        font-size: 16px;
      }
      .reward-btn {
        margin-left: 15px;
        border: 1px solid;
        color: #333;
        border-color: #c8c8c8;
        width: -webkit-calc(50% - 10px);
        width: calc(50% - 10px);
      }
      i {
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }
}
</style>
