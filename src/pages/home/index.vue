<template>
  <div class="flow-container">
    <card-article-list></card-article-list>
    <article-write-btn></article-write-btn>
    <div @click="targetLike()">喜欢文章</div>
    <!-- <button @click="toast()">toast</button> -->
  </div>
</template>

<script>
import cardArticleList from '@/components/card-article-list';
import articleWriteBtn from '@/components/article-write-btn';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    cardArticleList,
    articleWriteBtn
  },
  methods: {
    toast() {
      this.toastNone('测试信息');
    },
    targetLike() {
       wx.navigateTo({url: '/pages/like/main'})
    }
  },
  created() {
    //this.test();
  }
};
</script>

<style lang="scss" scoped>
.flow-container{
  overflow: auto;
}
</style>
