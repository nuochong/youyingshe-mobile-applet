<template>
  <div class="article-footer-panel">
    <div class="article-footer-placeholder">

    </div>
    <section class="article-footer-container">
      <div class="article-footer-wrap">
        <!-- 底部菜单 -->
        <div class="article-footer-btn article-footer-home">
          <i class="iconfont iconzhuye"></i>
          简书首页
        </div>
        <div class="article-footer-btn article-footer-share">
          <i class="iconfont iconfenxiang"></i>
          分享文章
        </div>
      </div>
    </section>
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
    sample() {}
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
  .article-footer-wrap {
    display: flex;
    i {
      color: #ea6f5a;
    }
    .article-footer-btn {
      height: 60px;
      line-height: 60px;
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
