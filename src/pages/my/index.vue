<template>
  <div class="my-container">
    <div class="my-wrap">
      <img class="my-empty" src="/static/images/empty.png" />
      <article-write-btn></article-write-btn>
      <button class="btn btn-success">
        <i class="iconfont iconweixin"></i>
        微信一键登录</button>
      <button class="btn btn-primary">已有简书账号登录</button>
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
  .my-wrap {
    padding: 0px 15px;
  }
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
    color:white;
    &.button-hover {
      background-color: #06ad56!important;
    }
  }
}
</style>
