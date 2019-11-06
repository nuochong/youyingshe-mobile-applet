<template>
  <div class="flow-container">
    <card-article-list></card-article-list>
    <article-write-btn></article-write-btn>
  </div>
</template>

<script>
import cardArticleList from '@/components/card-article-list';
import articleWriteBtn from '@/components/article-write-btn';

export default {
  data() {
    return {
      title: 'title'
    };
  },
  components: {
    cardArticleList,
    articleWriteBtn
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.flow-container {
  overflow: auto;
}
</style>
