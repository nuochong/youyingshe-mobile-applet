<template>
  <div>
    <ul class="flow-list-sort">
      <li class="active">最新发布</li>
      <li>最新评论</li>
      <li>热门</li>
    </ul>
    <ul class="flow-list-ul">

      <li class="flow-list-li" v-for="(item,index) in list" :key="index">
        <a>
          <div class="article">
            <img class="wrap-img" src="/static/images/4646413-d7ce3a81f2ad1631.webp" />
            <div class="title">吐血整理写给新手的水彩颜料选购指南（干货）</div>
            <div class="abstract">
              写完给新手的水彩画笔选购指南后，我一直想再写一篇关于水彩颜料的选购指南，但迟迟不能下笔，因为水彩颜料实在复杂的多，...
            </div>
          </div>
        </a>
        <div class="oneline">
          <span>
            <i class="iconfont iconjewel" />
            5409
          </span>
          <span>
            <i class="iconfont icon8" />
            5409
          </span>
          <span>
            <i class="iconfont iconhome_ico_like-" />
            5409
          </span>
          <span>
            <i class="iconfont iconmoneynew" />
            5409
          </span>
        </div>
      </li>
    </ul>
    <div class="load-more">
      加载更多
      <i class="iconfont icondown" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data() {
    return {
      title: 'components',
      isShowDirectory: false,
      list: [0, 2, 3, 4]
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
/* ArticleList */
.flow-list-sort {
  list-style: none;
  border: 1px solid #dad9d9;
  border-right: none;
  border-left: none;
  padding: 0;
  li {
    position: relative;
    display: inline-block;
    width: 33.333%;
    margin: -1px 0;
    padding: 12px 0;
    text-align: center;
    font-size: 14px;
    color: #999;
  }
  .active {
    color: #ea6f5a;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -28px;
      width: 56px;
      border-bottom: 2px solid #ea6f5a;
    }
  }
}

.flow-list-ul {
  position: relative;
  min-height: 100%;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding: 15px;
  list-style-type: none;
  text-align: left;
  padding: 0;
  .flow-list-li {
    position: relative;
    width: 100%;
    word-wrap: break-word;
    padding: 15px 18px;
    box-sizing: border-box;
    border-bottom: 1px solid;
    font-size: 0;
    border-color: #dad9d9;
    .article {
      padding-right: 95px;
      margin-top: 6px;
      display: block;
      .wrap-img {
        width: 80px;
        height: 80px;
        position: absolute;
        top: 50%;
        right: 15px;
        margin-top: -40px;
        border-radius: 3px;
        font-size: 0;
      }
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
    .oneline {
      padding-right: 95px;
      margin-top: 8px;
      line-height: 22px;
      .iconjewel {
        color: #ea6f5a;
        margin-right: 3px;
      }
      span {
        margin-right: 8px;
        font-size: 12px;
        color: #b1b1b1;
        i {
          margin-right: 3px;
        }
      }
    }
  }
}

.load-more {
  margin: auto 0;
  padding: 15px 0;
  text-align: center;
  font-size: 15px;
  color: #969696;
}
</style>
