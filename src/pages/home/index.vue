<template>
  <div>
    <card :text="title"></card>
  </div>
</template>

<script>
import card from '@/components/card';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    card
  },
  methods: {
    sample() {

    }
  },
  created() {
    this.test();
  }
};
</script>

<style lang="scss" scoped>

</style>
