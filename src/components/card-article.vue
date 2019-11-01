<template>
  <div class="card-article note-flow have-img">
    <section href="/p/b959acd0f338"
      class="content"><span class="wrap-img inline-3MDdF_0"><img
          src="https://upload-images.jianshu.io/upload_images/10760922-75c501d5d36e9d15.png?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp"></span>
      <div class="summary">
        <h6 class="title">

          R-ggplot2-如何将map与其他类型图表绘制在一张图里
        </h6>
        <p class="abstract">0. 今日绘图目标 将map与柱状图绘制在一张图中。 1. 所需R-packages 2. 示例数据
          2.1 re...</p>
      </div>
    </section>
    <div class="meta oneline">
      <i class="iconfont ic-icon_jewel icondiamond"></i><span>0.515</span><span
        class="name">TroyShen</span><span><i
          class="iconfont ic-list-comments iconliuyan"></i>
        1
      </span><span><i class="iconfont ic-list-like iconhome_ico_like-"></i>
        7
      </span></div>
  </div>
</template>

<script>
export default {
  props: ['text']
};
</script>

<style lang="scss" scoped>
.note-flow {
  position: relative;
  width: 100%;
  word-wrap: break-word;
  padding: 15px 18px;
  border-bottom: 1px solid;
  font-size: 0;
  border-color: #f0f0f0;
  box-sizing: content-box;
  background-color: white;
  &.have-img {
    .content {
      padding-right: 120px;
    }
    .meta {
      padding-right: 120px;
    }
  }
  .content {
    margin-top: 6px;
    display: block;
    &:hover {
      background-color: none;
      opacity: none;
    }
    span {
      width: 80px;
      height: 80px;
    }
    .wrap-img {
      position: absolute;
      top: 50%;
      right: 55px;
      margin-top: -40px;
      border-radius: 3px;
    }
    .inline-3MDdF_0 {
      background-color: transparent;
      -webkit-transition: 0.4s linear;
      -o-transition: 0.4s linear;
      transition: 0.4s linear;
      overflow: hidden;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .summary {
      overflow: hidden;
      .title {
        font-size: 18px;
        font-weight: 700;
        color: #333;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 25px;
        max-height: 50px;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        white-space: normal;
      }
      .abstract {
        margin-top: 6px;
        font-size: 13px;
        line-height: 1.5;
        color: #999;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 19px;
        max-height: 38px;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        white-space: normal;
      }
    }
  }
  .meta {
    margin-top: 8px;
    line-height: 22px;
    .ic-icon_jewel {
      font-size: 16px;
      color: #ea6f5a;
      margin-right: 3px;
    }
    span {
      margin-right: 8px;
      font-size: 12px;
      color: #b1b1b1;
    }
    i {
      font-size: 12px;
      display: inline-block;
    }
    .name {
      margin-right: 12px;
    }
  }
  .oneline {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.navigator-hover {
  background-color: none;
}
</style>
