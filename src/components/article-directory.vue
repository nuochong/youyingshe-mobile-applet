<template>
  <div>
    <div class="book-nav">
      <button class="open-chapter" @click="showDirectory">
        <i class="iconfont ic-catalog iconmulu"></i>
        目录
      </button>
      <a href="javascript:;" class="book-info">
        <img src="https://upload.jianshu.io/book/image/741d215c-5eb3-4202-a7c0-2448c74aa494?imageMogr2/auto-orient/strip|imageView2/1/w/51/h/69/format/webp"
          class="cover" />
        <span class="number">4</span>
        <span class="name oneline">青春玄幻|我的左眼 第一季</span>
      </a>
    </div>

    <div id="book-chapters-drawer-wrap">
      <div id="backdrop-r2u" class="backdrop" :class="{'show':isShowDirectory}" @click="showDirectory"></div>
      <div class=" drawer book-chapters-drawer-header" :class="{'change1':isShowDirectory,'changeHidden':!isShowDirectory}">
        <div class="book-chapters-header">
          <span class="title">目录(共61篇)</span>
          <button class="reset">
            <i class="iconfont ic-switch-order iconqiehuan"></i>
            切换顺序
          </button>
        </div>
      </div>
      <div class="drawer book-chapters-drawer-body" :class="{'change1':isShowDirectory,'changeHidden':!isShowDirectory}">
        <div id="book-chapters">
          <ul>
            <li class="chapter">
              <div class="part">61</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">青春玄幻|我的左眼61</span>
                </div>
                <div class="meta">
                  <span>字数 1991&nbsp;·&nbsp;</span>
                  <span>阅读 445&nbsp;·&nbsp;</span>
                  <span>04-16 23:19</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">60</div>
              <a href="javascript:;" class="content">
                <span class="try-read">试读</span>
                <div class="info">
                  <span class="name">青春玄幻|我的左眼1</span>
                </div>
                <div class="meta">
                  <span>字数 1842&nbsp;·&nbsp;</span>
                  <span>阅读 775&nbsp;·&nbsp;</span>
                  <span>01-31 10:35</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">59</div>
              <a href="javascript:;" class="content">
                <span class="try-read">试读</span>
                <div class="info">
                  <span class="name">青春玄幻|我的左眼2</span>
                </div>
                <div class="meta">
                  <span>字数 1906&nbsp;·&nbsp;</span>
                  <span>阅读 358&nbsp;·&nbsp;</span>
                  <span>02-01 09:47</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">58</div>
              <a href="javascript:;" class="content router-link-exact-active router-link-active">
                <span class="try-read">试读</span>
                <div class="info">
                  <span class="current">当前</span>
                  <span class="name">青春玄幻|我的左眼3</span>
                </div>
                <div class="meta">
                  <span>字数 1901&nbsp;·&nbsp;</span>
                  <span>阅读 283&nbsp;·&nbsp;</span>
                  <span>02-02 07:24</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">57</div>
              <a href="javascript:;" class="content">
                <span class="try-read">试读</span>
                <div class="info">
                  <span class="name">青春玄幻|我的左眼4</span>
                </div>
                <div class="meta">
                  <span>字数 1710&nbsp;·&nbsp;</span>
                  <span>阅读 289&nbsp;·&nbsp;</span>
                  <span>02-03 09:09</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">56</div>
              <a href="javascript:;" class="content">
                <span class="try-read">试读</span>
                <div class="info">
                  <span class="name">青春玄幻|我的左眼5</span>
                </div>
                <div class="meta">
                  <span>字数 2053&nbsp;·&nbsp;</span>
                  <span>阅读 250&nbsp;·&nbsp;</span>
                  <span>02-04 10:31</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">55</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">青春玄幻|我的左眼6</span>
                </div>
                <div class="meta">
                  <span>字数 1973&nbsp;·&nbsp;</span>
                  <span>阅读 324&nbsp;·&nbsp;</span>
                  <span>02-05 08:31</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">54</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">青春玄幻|我的左眼7</span>
                </div>
                <div class="meta">
                  <span>字数 2155&nbsp;·&nbsp;</span>
                  <span>阅读 262&nbsp;·&nbsp;</span>
                  <span>02-06 08:01</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">53</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">青春玄幻|我的左眼8</span>
                </div>
                <div class="meta">
                  <span>字数 1934&nbsp;·&nbsp;</span>
                  <span>阅读 354&nbsp;·&nbsp;</span>
                  <span>02-07 09:13</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">52</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">青春玄幻|我的左眼9</span>
                </div>
                <div class="meta">
                  <span>字数 1988&nbsp;·&nbsp;</span>
                  <span>阅读 247&nbsp;·&nbsp;</span>
                  <span>02-08 08:06</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">51</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">青春玄幻|我的左眼10</span>
                </div>
                <div class="meta">
                  <span>字数 2047&nbsp;·&nbsp;</span>
                  <span>阅读 472&nbsp;·&nbsp;</span>
                  <span>02-09 09:34</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">50</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">青春玄幻|我的左眼11</span>
                </div>
                <div class="meta">
                  <span>字数 1987&nbsp;·&nbsp;</span>
                  <span>阅读 256&nbsp;·&nbsp;</span>
                  <span>02-10 08:45</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">49</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">青春玄幻|我的左眼12</span>
                </div>
                <div class="meta">
                  <span>字数 1852&nbsp;·&nbsp;</span>
                  <span>阅读 300&nbsp;·&nbsp;</span>
                  <span>02-11 09:08</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">48</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">青春玄幻|我的左眼13</span>
                </div>
                <div class="meta">
                  <span>字数 1995&nbsp;·&nbsp;</span>
                  <span>阅读 233&nbsp;·&nbsp;</span>
                  <span>02-13 10:32</span>
                </div>
              </a>
            </li>
            <li class="chapter">
              <div class="part">47</div>
              <a href="javascript:;" class="content">
                <div class="info">
                  <span class="name">青春玄幻|我的左眼14</span>
                </div>
                <div class="meta">
                  <span>字数 2117&nbsp;·&nbsp;</span>
                  <span>阅读 446&nbsp;·&nbsp;</span>
                  <span>02-13 17:19</span>
                </div>
              </a>
            </li>
          </ul>
          <div class="scroller-1aZec_0">
            <div>
              <div class="flow-list-placeholder-load-more">
                加载更多 <i class="iconfont ic-show"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" drawer book-chapters-drawer-footer" :class="{'change1':isShowDirectory,'changeHidden':!isShowDirectory}">
        <a href="javascript:;" class="back">
          <i class="iconfont ic-read iconbook"></i>
          前往作品主页
        </a>
      </div>
    </div>

    <!-- 顶部占位 -->
    <div class="article-directory-placeholder"></div>
  </div>
</template>

<script>
// import card from '@/components/templete-components';

export default {
  data() {
    return {
      title: 'title',
      isShowDirectory: false
    };
  },
  components: {},
  methods: {
    sample() {},
    showDirectory() {
      this.isShowDirectory = !this.isShowDirectory;
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
/* ArticleDirectory */
.animation {
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -webkit-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  transition-timing-function: linear;
}
.article-directory-placeholder {
  display: block;
  height: 46px;
}
.baseF {
  font-weight: 400;
  line-height: 1.6;
}
.book-nav {
  //此处两行应该是全局继承，但是目前修改其它地方会受影响，只做局部处理
  @extend .baseF;

  padding-left: 18px;
  padding-right: 18px;
  vertical-align: middle;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 46px;
  border-bottom: 1px solid;
  z-index: 11;
  background-color: #fff;
  border-color: #f0f0f0;
  .open-chapter {
    float: right;
    font-size: 14px;
    padding-top: 15px;
    color: #333;

    line-height: 1.15;
    margin: 0;
  }
  .book-info {
    display: block;
    overflow: hidden;
    margin-right: 60px;
    .cover {
      width: 17px;
      height: 23px;
      vertical-align: middle;
      margin-top: 11px;
      margin-right: 5px;
      float: left;
    }
    .number {
      font-size: 14px;
      color: #999;
      margin-left: 5px;
      float: right;
    }
    span {
      display: block;
      margin-top: 12px;
    }
    .name {
      margin-left: 7px;
      font-size: 14px;
      color: #333;
      display: block;
      margin-top: 12px;
    }
    .oneline {
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

//目录侧栏显示的body样式
.change {
  overflow: hidden;
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  top: 0px;
  height: 667px;
}
#book-chapters-drawer-wrap {
  .hidden {
    visibility: hidden;
  }
  .change1 {
    top: 0px;
    height: 100%;
    width: 70%;
    right: 0px;
    @extend .animation;
  }
  .changeHidden {
    top: 0px;
    height: 100%;
    width: 70%;
    right: -70%;
    @extend .animation;
  }
  .drawer {
    padding: 0;
    z-index: 12;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
  }
  //侧栏头部
  .book-chapters-drawer-header {
    height: auto !important;
    z-index: 13;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    .book-chapters-header {
      height: 46px;
      border-bottom: 1px solid;
      padding: 10px 18px;
      border-color: #eaeaea;
      .title {
        font-size: 14px;
        font-weight: 700;
        color: #545454;
      }
      .reset {
        float: right;
        font-size: 14px;
        color: #999;
        margin-top: 5px;
      }
    }
  }
  //遮罩层
  .backdrop {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 11;
    background-color: transparent;
    -webkit-transition-property: background-color;
    -o-transition-property: background-color;
    transition-property: background-color;
    visibility: hidden;
    @extend .animation;
    &.show {
      background-color: rgba(0, 0, 0, 0.7);
      visibility: visible;
      @extend .animation;
    }
  }
  //侧栏身体
  .book-chapters-drawer-body {
    #book-chapters {
      background-color: #fff;
      height: 100%;
      padding: 0;
      ul {
        margin-left: 15px;
        padding: 46px 10px 60px 0;
        margin-bottom: 28px;
        list-style-type: none;
        li {
          line-height: 30px;
          .info {
            padding-right: 10px;
          }
        }
        .chapter {
          position: relative;
          padding: 18px 0;
          &:not(:last-child) {
            border-bottom: 1px solid #f0f0f0;
          }
          .part {
            height: 100%;
            width: 30px;
            color: #b1b1b1;
            font-size: 17px;
            line-height: 24px;
            float: left;
          }
          .content {
            font-size: 21px;
            overflow: hidden;
            display: block;

            .try-read {
              float: right;
              background-color: rgba(218, 158, 85, 0.1);
              color: #da9e55;
              display: block;
              width: 44px;
              height: 24px;
              border-radius: 12px;
              font-size: 12px;
              text-align: center;
              line-height: 24px;
            }
            .info {
              display: block;
              overflow: hidden;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              display: -webkit-box;
              /* -webkit-line-clamp: 2; */
              -webkit-box-orient: vertical;
              line-height: 21px;
              max-height: 42px;
              -webkit-box-sizing: content-box;
              -moz-box-sizing: content-box;
              box-sizing: content-box;
              white-space: normal;
              .current {
                margin-right: 6px;
                padding: 2px 4px;
                font-size: 12px;
                color: #fff;
                background-color: #ea6f5a;
                border-radius: 3px;
                vertical-align: middle;
                display: inline-block;
                line-height: 16px;
                margin-top: -4px;
              }
              .name {
                font-size: 15px;
                color: #2f2f2f;
              }
            }
            .meta {
              font-size: 13px;
              color: #999;
              line-height: 20px;
              margin-top: 4px;
              span {
                display: inline-block;
                vertical-align: middle;
              }
            }
          }
        }
      }
      //没有更多
      .scroller-1aZec_0 {
        background-color: inherit;
        clear: both;
        .flow-list-placeholder-load-more {
          margin: auto 0;
          padding: 15px 0 15px 7px;
          text-align: center;
          font-size: 15px;
          color: #969696;
        }
      }
    }
  }
  //底部
  .book-chapters-drawer-footer {
    top: auto !important;
    height: auto !important;
    bottom: 0;
    -webkit-box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    z-index: 12;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    padding: 0;
    .back {
      text-align: center;
      font-size: 16px;
      display: block;
      height: 60px;
      line-height: 60px;
      background-color: #fff;
      color: #333;
      i {
        margin-right: 5px;
        color: #ea6f5a;
      }
    }
  }
}
button {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
  border: none;
  background-color: transparent;
}
img {
  max-width: 100%;
}

img {
  border-style: none;
}
</style>
