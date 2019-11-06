<template>
  <div>
    <templeteComponents :text="title"></templeteComponents>
  </div>
</template>

<script>
import templeteComponents from '@/components/templete-components';

export default {
  data() {
    return {
      title: 'title'
    };
  },
  components: {
    templeteComponents
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>
