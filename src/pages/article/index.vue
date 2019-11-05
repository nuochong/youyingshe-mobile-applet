<template>
  <div>
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
    articleFooter
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>
