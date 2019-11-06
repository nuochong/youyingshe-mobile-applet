<template>
  <div class="article-write-btn-wrap">
    <button class="article-write-btn" :class="{'article-write-btn-hidden':isHidden}" @click="targetWrite">
      <i class="iconfont iconadd"></i>
      写文章
    </button>
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
    targetWrite(){
      wx.navigateTo({ url: '/pages/write/main' });
    }
  },
  created() {},
  //监听屏幕滚动 判断上下滚动
  onPageScroll: function(ev) {
    let _this = this;
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
.animation {
  -webkit-transition-duration: 0.5s;
  -o-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.article-write-btn-hidden {
  bottom: -80px !important;
  @extend .animation;
}
.article-write-btn {
  height: 40px;
  line-height: 40px;
  width: 140px;

  color: white;
  font-size: 18px;
  background-color: #ea6f5a;
  border-radius: 25px;
  display: inline-block;
  position: fixed;
  bottom: 40px;
  left: 50%;
  margin-left: -70px;
  font-weight: bold;

  -moz-box-shadow: 5px 5px 15px #6e6e6e;
  -webkit-box-shadow: 5px 5px 15px #6e6e6e;
  box-shadow: 5px 5px 15px #6e6e6e;
  @extend .animation;
}
</style>
