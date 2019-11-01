<template>
  <div>
    <card :text="title"></card>
    <button @click="toast()">toast</button>
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
    toast(){
      this.toastNone('测试信息');
    },
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
