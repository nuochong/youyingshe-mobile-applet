<template>
  <div class="article-write-card">
    <article-write-add></article-write-add>
    <div class="article-card-panel">
      <div class="article-card-panel-close">
        <i class="iconfont iconhebingxingzhuang"></i>
      </div>
      <div class="article-card-panel-top">
        <i class="iconfont iconshang"></i>
      </div>
      <div class="article-card-panel-bottom">
        <i class="iconfont iconbottom"></i>
      </div>
      <div class="article-card-content" @click="targetArticleEdit">
        测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据
      </div>
    </div>
  </div>
</template>

<script>
import articleWriteAdd from '@/components/article-write-add';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    articleWriteAdd
  },
  methods: {
    targetArticleEdit() {
      wx.navigateTo({ url: '/pages/article-edit/main' });
    }
  }
};
</script>

<style lang="scss" scoped>
/* ArticleFooter */
.article-write-card {
  margin-bottom: 15px;
  .article-card-panel {
    background-color: white;
    position: relative;
    i{
      color:#898989;
    }
    .article-card-panel-close {
      position: absolute;
      top: 5px;
      left: 5px;
      .iconfont {
      }
    }
    .article-card-panel-top {
      position: absolute;
      right: 5px;
      top: 5px;
      .iconfont {
      }
    }
    .article-card-panel-bottom {
      position: absolute;
      right: 5px;
      bottom: 5px;
      .iconfont {
      }
    }
    .article-card-content {
      margin: 0 30px;
      padding: 15px 0;
      min-height: 140px;
      text-align: left;
    }
  }
}
</style>
