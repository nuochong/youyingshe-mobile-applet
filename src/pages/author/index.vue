<template>
  <div>
    <user-info></user-info>
    <hr/>
    <article-list></article-list>
  </div>
</template>

<script>
import userInfo from '@/components/user-info';
import articleList from '@/components/article-list';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    userInfo,
    articleList
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>
