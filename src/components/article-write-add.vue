<template>
  <div class="article-card-btn-wrap">
    <button class="article-card-btn" @click="open">
      <i class="iconfont iconadd"></i>
      添加
    </button>
  </div>
</template>

<script>
// import card from '@/components/card';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {},
  methods: {
    targetArticleEdit() {
      wx.navigateTo({ url: '/pages/article-edit/main' });
    },
    open() {
      this.bus.$emit('getTarget', true);
    }
  }
};
</script>

<style lang="scss" scoped>
/* ArticleFooter */
.article-card-btn-wrap {
  text-align: center;
  .article-card-btn {
    background-color: white;
    border: 1px solid rgb(177, 177, 177);
    color: #898989;
    height: 28px;
    line-height: 28px;
    border-radius: 14px;
    font-size: 14px;
    margin-bottom: 15px;
    .iconfont {
    }
  }
}
</style>
