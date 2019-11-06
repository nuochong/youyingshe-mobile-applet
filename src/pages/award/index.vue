<template>
  <div>
    <card :text="title"></card>
  </div>
</template>

<script>
import card from '@/components/templete-components';

export default {
  data() {
    return {
      title: 'title'
    };
  },
  components: {
    card
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>
