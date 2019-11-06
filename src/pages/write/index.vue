<template>
  <div>
    <section class="sec-nav">
      <navigation-bar :title="title" :navBackgroundColor="'pink'" :titleColor="'green'" :back-visible="true" :home-path="'/pages/index/main'">
      </navigation-bar>
    </section>
    <div class="article-write-container">
      <div class="article-write-title">
        <input type="text" name="title" id="title" placeholder="点击输入标题" />
      </div>
      <article-write-card></article-write-card>
      <article-write-card></article-write-card>
      <article-write-card></article-write-card>
      <article-write-card></article-write-card>
      <article-write-add></article-write-add>
      <article-write-modal></article-write-modal>
      <article-write-footer></article-write-footer>
    </div>
  </div>

</template>

<script>
import articleWriteCard from '@/components/article-write-card';
import articleWriteFooter from '@/components/article-write-footer';
import articleWriteAdd from '@/components/article-write-add';
import articleWriteModal from '@/components/article-write-modal';
import navigationBar from '../../components/navigationBar.vue';

export default {
  data() {
    return {
      title: '写文章'
    };
  },
  components: {
    articleWriteCard,
    articleWriteFooter,
    articleWriteAdd,
    articleWriteModal,
    navigationBar
  },
  methods: {
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.sec-nav {
  z-index: 1000;
}
.article-write-container {
  background-color: #dfdfdf;
  position: absolute;
  width: 100%;
  height: 100%;
  .article-write-title {
    background-color: white;
    margin-bottom: 15px;
    padding: 15px;
    input {
      height: 30px;
    }
  }
}
</style>
