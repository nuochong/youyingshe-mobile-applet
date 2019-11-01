<template>
  <div>
    <ul class="flow-list-ul">
      <li>
        <card-article></card-article>
      </li>
      <li>
        <card-article></card-article>
      </li>
      <li>
        <card-article></card-article>
      </li>
      <li>
        <card-article></card-article>
      </li>
    </ul>
    <article-write-btn></article-write-btn>

    <button @click="toast()">toast</button>
  </div>
</template>

<script>
import cardArticle from '@/components/card-article';
import articleWriteBtn from '@/components/article-write-btn';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    cardArticle,
    articleWriteBtn
  },
  methods: {
    toast() {
      this.toastNone('测试信息');
    },
    sample() {}
  },
  created() {
    this.test();
  }
};
</script>

<style lang="scss" scoped>
.flow-list-ul {
  position: relative;
  min-height: 100%;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
}
</style>
