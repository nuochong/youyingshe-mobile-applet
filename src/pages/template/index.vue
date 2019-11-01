<template>
  <div>
    <card :text="motto"></card>
  </div>
</template>

<script>
import card from '@/components/card';

export default {
  data() {
    return {
      title: ''
    };
  },
  components: {
    card
  },
  methods: {
    sample() {

    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
</style>
