<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs;
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({ key: 'logs' }).data || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      });
    } else {
      logs = mpvue.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync('logs', logs);
    }
  },
  log() {
    console.log(`log at:${Date.now()}`);
  }
};
</script>

<style lang="scss">
@import '../static/css/iconfont/iconfont.css';

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.btn {
  margin: 15px;
}
//处理默认样式
i {
  display: inline-block;
}
a {
  &.navigator-hover {
    background-color: transparent;
    opacity: none;
  }
}
//重置按钮样式start
button {
  background-color: #fff;
  border-radius: 0;
  line-height: inherit;
  -webkit-appearance: none !important; //使元素看起来像什么
  display: inline-block;
  &::after {
    border: none;
  } //使元素看起来像什么
}
//重置按钮样式end

hr {
  border-width: 0;
  height: 10px !important;
  background-color: #e0e0e0;
}

//小程序所有组件初始化样式 box-sizing: border-box

view,
scroll-view,
swiper,
swiper-item,
movable-area,
movable-view,
cover-view,
cover-image,
icon,
text,
rich-text,
progress,
button,
checkbox-group,
checkbox,
form,
input,
label,
picker,
picker-view,
radio-group,
radio,
slider,
switch,
textarea,
navigator,
functional-page-navigator,
image,
video,
camera,
live-player,
live-pusher,
map,
canvas,
open-data,
web-view,
ad {
  box-sizing: border-box;
}
</style>
