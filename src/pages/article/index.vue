<template>
  <div>
    <article-body></article-body>
    <comment></comment>
    <recommend></recommend>
  </div>
</template>

<script>
import articleBody from '@/components/article-body';
import comment from '@/components/comment';
import recommend from '@/components/recommend';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    articleBody,
    comment,
    recommend
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>
