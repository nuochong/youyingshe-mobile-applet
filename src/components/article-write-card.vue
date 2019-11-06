<template>
  <div class="article-footer-panel">
    卡片
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
    targetArticlePreview() {
      wx.navigateTo({ url: '/pages/article-preview/main' });
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
/* ArticleFooter */
.article-footer-placeholder {
  display: block;
  height: 60px;
}
.article-footer-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  border-top: 1px solid rgb(220, 220, 220);
  background-color: white;
  z-index: 2;
  padding:10px 0;
  .article-footer-wrap {
    display: flex;
    i {
      color: #ea6f5a;
    }
    .article-footer-btn {
      height: 40px;
      line-height:40px;
      text-align: center;
    }
    .article-footer-home {
      flex: 1;
    }
    .article-footer-share {
      flex: 1;
      border-left: 1px solid rgb(220, 220, 220);
    }
  }
}
</style>
