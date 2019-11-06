<template>
  <div>
    <article-write-card></article-write-card>
    <article-write-footer></article-write-footer>
  </div>
</template>

<script>
import articleWriteCard from '@/components/article-write-card';
import articleWriteFooter from '@/components/article-write-footer';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    articleWriteCard,
    articleWriteFooter
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>
