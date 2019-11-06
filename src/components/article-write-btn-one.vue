<template>
  <div class="article-preview-btn-wrap">
    <div class="article-preview-btn-placeholder"></div>
    <div class="article-preview-btn">
      保存并发布
    </div>
  </div>
</template>

<script>
import articleWriteBtn from '@/components/article-write-btn';

export default {
  props: ['text'],
  data() {
    return {
      title: 'components',
      scrollTop: 0,
      isHidden: false
    };
  },
  components: {},
  methods: {
    targetWrite() {
      wx.navigateTo({ url: '/pages/write/main' });
    }
  },
  created() {},
  //监听屏幕滚动 判断上下滚动
  onPageScroll: function(ev) {
    var _this = this;
    console.log('ev', ev);
    //当滚动的top值最大或最小时，为什么要做这一步是因为在手机实测小程序的时候会发生滚动条回弹，所以为了处理回弹，设置默认最大最小值
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    //判断浏览器滚动条上下滚动
    if (ev.scrollTop > this.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      console.log('向下滚动');
      this.isHidden = true;
      //向下滚动
    } else {
      console.log('向上滚动');
      this.isHidden = false;
      //向上滚动
    }
    //给scrollTop重新赋值
    setTimeout(function() {
      _this.scrollTop = ev.scrollTop;
    }, 0);
  }
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
