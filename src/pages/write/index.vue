<template>
  <div>
    <article-write-footer></article-write-footer>
  </div>
</template>

<script>
import articleWriteFooter from '@/components/article-write-footer';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
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
