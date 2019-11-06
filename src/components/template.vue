<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data() {
    return {
      title: 'title'
    };
  },
  components: {},
  mounted() {},
  methods: {
    toast() {
      this.toastNone('测试信息');
    }
  },
  created() {
    //this.test();
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding: 10px;
}
</style>
