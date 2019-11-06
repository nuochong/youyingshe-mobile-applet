<template>
  <div class="article-preview-container">
    <div class="article-preview-content">
      <div class="article-preview-title">我是标题</div>
      <p>10月30日，Bioconductor 3.10 正式发布，该版本的bioc共包括了 1822 个软件包，384 个实验数据包，952 个注释包和 27 个工作流程，基于 R 3.6.1。</p>
      <p>其中，新的软件包有93个，新的数据包15个，新的注释包2个，大量的旧包都进行了一波更新。</p>
      <p>接下来推荐几个值得关注的最新软件包，以及一些经典包的重要更新。</p>
    </div>
    <article-write-btn-one text="保存并发布"></article-write-btn-one>
  </div>
</template>

<script>
import articleWriteBtnOne from '@/components/article-write-btn-one';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    articleWriteBtnOne
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.article-preview-container {
  .article-preview-content {
    padding: 15px;
    padding-bottom: 60px;
    .article-preview-title {
      margin: 15px 0;
      font-size: 30px;
      font-weight: 700;
      font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
      line-height: 1.4;
      color: #2f2f2f;
    }
    p {
      margin: 0 0 25px;
    }
  }
}
</style>
