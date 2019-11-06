<template>
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
    <li>
      <card-article></card-article>
    </li>
    <li>
      <card-article></card-article>
    </li>
  </ul>
</template>

<script>
import cardArticle from '@/components/card-article';
export default {
  //props: ['text'],
  data() {
    return {
      title: 'title'
    };
  },
  components: {
    cardArticle
  },
  methods: {},
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
