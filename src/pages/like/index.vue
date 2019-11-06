<template>
  <div class="like-container">
    <card-article-list></card-article-list>
  </div>
</template>

<script>
import cardArticleList from '@/components/card-article-list';

export default {
  data() {
    return {
      title: 'title'
    };
  },
  components: {
    cardArticleList
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.like-container {
}
</style>
