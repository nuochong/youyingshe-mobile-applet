<template>
  <div class="article-preview-btn-wrap">
    <div class="article-preview-btn-placeholder"></div>
    <div class="article-preview-btn" v-text="text"></div>
  </div>
</template>

<script>
import articleWriteBtn from '@/components/article-write-btn';

export default {
  props: ['text'],
  data() {
    return {
      title: 'title'
    };
  },
  components: {},
  methods: {
    targetWrite() {
      wx.navigateTo({ url: '/pages/write/main' });
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.article-preview-btn-wrap {
  .article-preview-btn-placeholder {
    height: 60px;
  }
  .article-preview-btn {
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-top: 1px solid rgb(220, 220, 220);
    background-color: #ea6f5a;
    color: white;
    flex: 1;
  }
}
</style>
