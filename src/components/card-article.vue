<template>
  <div class="article-card-container">
    <div class="info" @click="targetAuthor">
      <img
        src="https://upload.jianshu.io/users/upload_avatars/17593283/1417dbeb-1561-4a6f-b15a-032f74913f35.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180/format/webp"
        class="user-avatar">
      <div class="user-content">
        <div class="user-nickname">
          <div class="nickname">
            <p class="oneline">路人甲</p>
          </div><span class="label badge-item"> 简书作者</span>
        </div>
      </div>
    </div>

    <div class="card-article note-flow have-img">
      <section href="javascript:;" @click="targetArticle" class="content"><span class="wrap-img inline-3MDdF_0"><img
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
        <i class="iconfont ic-icon_jewel icondiamond"></i><span>0.515</span><span class="name">TroyShen</span><span><i
            class="iconfont ic-list-comments iconliuyan"></i>
          1
        </span><span><i class="iconfont ic-list-like iconhome_ico_like-"></i>
          7
        </span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data() {
    return {
      title: 'title'
    };
  },
  components: {},
  methods: {
    targetArticle() {
      wx.navigateTo({ url: '/pages/article/main' });
    },
    targetAuthor() {
      wx.navigateTo({ url: '/pages/author/main' });
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.info {
  padding: 15px 18px 0px 18px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 17px;
    float: left;
    margin-right: 5px;
  }
  img {
    max-width: 100%;
    border-style: none;
  }
  .user-content {
    overflow: hidden;
    .user-nickname {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      font-size: 16px;
      .nickname {
        overflow: hidden;
        margin-right: 5px;
      }
    }
  }
}
.note-flow {
  position: relative;
  width: 100%;
  word-wrap: break-word;
  //padding: 15px 18px;
  padding: 5px 18px 15px 18px;
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
