<template>
  <div class="article-write-card">
    <div class="article-card-btn-wrap">
      <button class="article-card-btn" @click="open">
        <i class="iconfont iconadd"></i>
        添加
      </button>
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
    }
  }
};
</script>

<style lang="scss" scoped>
/* ArticleFooter */
.article-write-card {
  margin-bottom: 15px;
  .article-card-btn-wrap {
    text-align: center;

    .article-card-btn {
      background-color: white;
      border: 1px solid gray;
      height: 28px;
      line-height: 28px;
      border-radius: 14px;
      font-size: 14px;
      margin-bottom: 15px;
      .iconfont {
      }
    }
    .article-card-panel {
      background-color: white;
      position: relative;
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
        margin: 0 25px;
        padding: 15px 0;
        min-height: 140px;
        text-align: left;
      }
    }
  }
}
</style>
