<template>
  <div class="article-write-container">
    <div class="article-write-title">
      <input type="text" name="title" id="title" placeholder="点击输入标题"/>
    </div>
    <article-write-card></article-write-card>
    <article-write-card></article-write-card>
    <article-write-card></article-write-card>
    <article-write-card></article-write-card>
    <article-write-add></article-write-add>
    <article-write-footer></article-write-footer>
  </div>
</template>

<script>
import articleWriteCard from '@/components/article-write-card';
import articleWriteFooter from '@/components/article-write-footer';
import articleWriteAdd from '@/components/article-write-add';


export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    articleWriteCard,
    articleWriteFooter,
    articleWriteAdd
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.article-write-container{
    background-color: #dfdfdf;
    position: absolute;
    width: 100%;
    height: 100%;
    .article-write-title{
      background-color: white;
      margin-bottom: 15px;
      padding: 15px;
      input{
        height: 30px;
      }
    }
}
</style>
