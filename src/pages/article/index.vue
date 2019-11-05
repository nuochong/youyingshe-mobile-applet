<template>
  <div>
    <article-directory></article-directory>
    <article-body></article-body>
    <hr/>
    <comment></comment>
    <hr/>
    <recommend></recommend>
    <article-footer></article-footer>
  </div>
</template>

<script>
import articleBody from '@/components/article-body';
import comment from '@/components/comment';
import recommend from '@/components/recommend';
import articleFooter from '@/components/article-footer';
import articleDirectory from '@/components/article-directory';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    articleBody,
    comment,
    recommend,
    articleFooter,
    articleDirectory
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>
