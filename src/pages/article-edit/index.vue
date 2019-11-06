<template>
  <div class="article-edit-container">
    <div class="article-edit-content">
      <textarea name="content" id="" cols="30" rows="10">
        我是测试数据我是测试数据我是测试数据我是测试数据我是测试数据我是测试数据
        我是测试数据我是测试数据我是测试数据我是测试数据我是测试数据我是测试数据
      </textarea>
    </div>
    <article-write-btn-one text="保存"></article-write-btn-one>
  </div>
</template>

<script>
import articleWriteBtnOne from '@/components/article-write-btn-one';

export default {
  data() {
    return {
      title: 'title'
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
.article-edit-container {
  .article-edit-content {
    padding: 15px;
    padding-bottom: 60px;
    textarea {
      width: 100%;
    }
  }
}
</style>
