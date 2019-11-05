<template>
  <div>
           <section class="article-recommend">
          <p class="top-title">
            推荐阅读
            <a href="javascript:;" class="more">
              更多精彩内容
              <i class="iconfont ic-link" />
            </a>
          </p>
          <div class="recommend-note">
            <div class="recommend-wrap">
              <span class="stats-comp">
                <div class="recommend-img" style={this.state.bg}>
                  &nbsp;
                </div>
                <div class="author">
                  <div class="title">绘画艺术丨今日教程：彩铅画—兰花</div>
                  <div class="avatar">
                    <img src="https://upload-images.jianshu.io/upload_images/16572117-4710f26e4a214620.jpeg" />
                  </div>
                  <div class="author-name">教画画的小然</div>
                  <div class="meta">
                    App中阅读
                    <i class="iconfont ic-list-read" />
                    <span>457</span>
                    <i class="iconfont ic-list-comments" />
                    <span>0</span>
                    <i class="iconfont ic-list-like" />
                    <span>15</span>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </section>
  </div>
</template>

<script>
// import articleBody from '@/components/article-body';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
  },
  methods: {
    sample() {

    }
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>
/**/
.article-recommend {
  padding: 0 18px;
  .top-title {
    margin: 0 -18px;
    padding: 10px 18px;
    font-size: 14px;
    font-weight: 700;
    background-color: transparent;
    margin-bottom: -12px;
    color: #545454;
    .more {
      float: right;
      color: #888;
      font-weight: 400;
    }
  }
  .recommend-note {
    .recommend-wrap {
      position: relative;
      height: 130px;
      font-size: 0;
      display: block;
      overflow: hidden;
      margin-top: 12px;
      .stats-comp {
        font-size: 0;
        .recommend-img {
          width: 100%;
          height: 100%;
          background-position: 50%;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .author {
          position: absolute;
          bottom: 10px;
          left: 16px;
          right: 16px;
          z-index: 2;
          font-size: 16px;
          text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
          .title {
            margin: 0 0 5px;
            max-height: 44px;
            overflow: hidden;
            font-size: 17px;
            font-weight: 700;
            line-height: 1.3;
            color: #fff;
            text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
            z-index: 2;
          }
          .avatar {
            display: inline-block;
            margin-right: 2px;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              vertical-align: middle;
              border: none;
            }
          }
          .author-name {
            font-size: 13px;
            color: #fff;
            display: inline-block;
          }
          .meta {
            float: right;
            margin-top: 4px;
            font-size: 12px;
            color: #fff;
            text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
            opacity: 0.7;
            i {
              margin: 0 3px 0 5px;
            }
          }
        }
      }
    }
  }
}
</style>
