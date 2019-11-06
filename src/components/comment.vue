<template>
  <div>
    <section class="article-comment">
      <div class="top-title">
        暂无评论
        <button class="write-comment" @click="changeShowComment">
          <i class="iconfont iconwrite" />
          写评论
        </button>
      </div>

      <div class="no-content">
        <img src="/static/images/icon_comment_no.1b12627d.png" mode="widthFix" />
        <div>
          智慧如你，不想 <button class="reply-btn">发表一点想法</button>
          咩~
        </div>
      </div>

      <div class="comment-wrapper" v-if="isShowComment">
        <textarea id="comment" placeholder="写下你的评论..." />
        <div id="backdrop-g1y" class="backdrop show" >
            <div class="drawer comment-reply-drawer">
              <div class="control">
                <button class="cancel" @click="changeShowComment">取消</button>
                <button class="submit">确认</button>
              </div>
            </div>
          </div>
      </div>

      <div class="comments-wrap">
        <div class="comment-item">
          <a href="javascript:;" class="user-avatar">
            <span class="">
              <img
                src="https://upload.jianshu.io/users/upload_avatars/7884341/3f5f45a8-116a-48dd-b3c1-88829e29a470.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/70/h/70/format/webp" />
            </span>
          </a>
          <div class="main">
            <div class="comment-user">
              <div class="nickname-wrap">
                <a href="javascript:;" class="nickname oneline">
                  青藤阁任春芳
                </a>
                <img
                  src="https://upload.jianshu.io/users/upload_avatars/7884341/3f5f45a8-116a-48dd-b3c1-88829e29a470.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/70/h/70/format/webp"
                  width="20" height="20" />
              </div>
            </div>
            <div class="comment-content">👍👍👍🌹🌹</div>
            <div class="comment-extra">
              <span class="floor">6楼</span>
              08.12 09:57
              <div class="social-wrap">
                <button class="reply-btn">
                  <i class="iconfont ic-pinglunhuifu" />
                </button>
                <button>
                  <i class="iconfont ic-icon_comment_like" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="comment-item ">
          <a href="javascript:;" class="user-avatar">
            <span class="">
              <img
                src="https://upload.jianshu.io/users/upload_avatars/7884341/3f5f45a8-116a-48dd-b3c1-88829e29a470.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/70/h/70/format/webp" />
            </span>
          </a>
          <div class="main">
            <div class="comment-user">
              <div class="nickname-wrap">
                <a href="javascript:;" class="nickname oneline">
                  青青竹青
                </a>
                <img
                  src="https://upload.jianshu.io/users/upload_avatars/7884341/3f5f45a8-116a-48dd-b3c1-88829e29a470.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/70/h/70/format/webp"
                  width="20" height="20" />
              </div>
            </div>
            <div class="comment-content">你的画，我都看过来了，我觉得这幅最好！</div>
            <div class="comment-extra">
              <span class="floor">5楼</span>
              08.06 18:23
              <div class="social-wrap">
                <button class="reply-btn">
                  <i class="iconfont ic-pinglunhuifu" />
                </button>
                <button>
                  <i class="iconfont ic-icon_comment_like" />
                </button>
              </div>
            </div>
            <div class="sub-comment-list">
              <div class="sub-comment-item">
                <a href="javascript:;" class="user-avatar">
                  <span class="">
                    <img
                      src="https://upload.jianshu.io/users/upload_avatars/7884341/3f5f45a8-116a-48dd-b3c1-88829e29a470.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/70/h/70/format/webp" />
                  </span>
                </a>
                <div class="sub-comment-wrap">
                  <a href="javascript:;" class="nickname oneline">
                    清欢余余
                  </a>
                  <div class="sub-comment-text">
                    <a href="javascript:;" class="maleskine-author" target="_blank">
                      @青青竹青
                    </a>{' '}
                    哈哈，谢谢夸奖，说明我在进步嘛，努力还是有收获哒。。😀
                  </div>
                  <div class="sub-comment-extra">
                    08.07 07:46
                    <button class="reply-btn">回复</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="comment-open-app-btn-wrap">
          <button class="comment-open-app-btn">打开应用，查看全部评论</button>
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
      title: 'title',
      isShowComment: false
    };
  },
  components: {},
  methods: {
    changeShowComment() {
      this.isShowComment = !this.isShowComment;
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
/*---------*/
.article-comment {
  position: relative;
  background-color: #fff;
  padding: 0 18px;
  .top-title {
    border-bottom: none;
    padding-top: 15px;
    margin-left: 0;
    margin-right: 0;
    font-size: 16px;
    font-weight: 700;
    color: #545454;
    .write-comment {
      float: right;
      color: #ea6f5a;
      line-height: 22px;
      font-size: 14px;
      i {
        margin-right: 5px;
      }
    }
  }
  .no-content {
    padding: 40px 0;
    font-size: 14px;
    color: #969696;
    text-align: center;
    background-color: #fff;
    img {
      padding-bottom: 10px;
      width: 140px;
    }
    button {
      color: #3194d0;
    }
  }
  .comment-wrapper {
    textarea {
      padding: 15px;
      position: fixed;
      top: 0;
      left: 0;
      display: none;
      z-index: 13;
      width: 100%;
      height: 150px;
      font-size: 17px;
      line-height: 1.5;
      background-color: transparent;
      color: #333;
      display: block;
    }
    .backdrop {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 11;
      background-color: transparent;
      -webkit-transition-duration: 0.2s;
      -o-transition-duration: 0.2s;
      transition-duration: 0.2s;
      -webkit-transition-property: background-color;
      -o-transition-property: background-color;
      transition-property: background-color;
    }
    .show {
      -webkit-transition-timing-function: linear;
      -o-transition-timing-function: linear;
      transition-timing-function: linear;
      background-color: rgba(0, 0, 0, 0.6);
    }
    .comment-reply-drawer {
      padding: 15px;
      left: 0px;
      width: 100%;
      height: 222px;
      top: 0px;
      z-index: 12;
      position: fixed;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      background-color: #fff;
      .control {
        position: absolute;
        bottom: 15px;
        right: 15px;
        text-align: right;
        button {
          margin-left: 15px;
          width: 80px;
          height: 35px;
          font-size: 17px;
          line-height: 35px;
        }
        .cancel {
          color: #999;
        }
        .submit {
          background-color: #42c02e;
          color: #fff;
          border-radius: 4px;
        }
      }
    }
  }
}

.comments-wrap {
  .comment-item {
    border-bottom: 1px solid;
    border-color: #f0f0f0;

    padding-top: 15px;
    .user-avatar {
      float: left;
      margin-right: 10px;
      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }
    .main {
      overflow: hidden;
      .comment-user {
        margin-bottom: 6px;
        .nickname-wrap {
          overflow: hidden;
          .nickname {
            font-size: 16px;
            font-weight: 700;
            vertical-align: middle;
            color: #484848;
          }
          .oneline {
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          img {
            width: 18px;
            height: 18px;
            vertical-align: middle;
            margin-left: 5px;
          }
        }
      }
      .comment-content {
        font-size: 16px;
        line-height: 1.7;
        padding-right: 18px;
        color: #484848;

        word-break: break-word !important;
        word-break: break-all;
      }
      .comment-extra {
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        color: #b1b1b1;
        margin-top: 5px;
        margin-bottom: 15px;
      }
      .sub-comment-list {
        .sub-comment-item {
          padding: 15px 0;
          border-top: 1px solid;
          font-size: 14px;
          color: #484848;
          border-color: #e6e6e6;
          .user-avatar {
            float: left;
            margin-right: 8px;
            img {
              width: 22px;
              height: 22px;
              border-radius: 50%;
            }
          }
          .sub-comment-wrap {
            overflow: hidden;
            padding-right: 18px;

            overflow: hidden;
            padding-right: 18px;

            .nickname {
              font-size: 16px;
              font-weight: 700;
              vertical-align: middle;
              color: #484848;
            }
            .sub-comment-text {
              font-size: 15px;
              a {
                color: #3194d0;
              }
            }
            .sub-comment-extra {
              padding-top: 5px;
              font-size: 12px;
              color: #b1b1b1;
              .reply-btn {
                padding-left: 6px;
                font-size: 13px;
                color: #b1b1b1;
              }
            }
          }
        }
      }
    }
  }
  .comment-open-app-btn-wrap {
    text-align: center;
    padding-bottom: 20px;
    margin-top: 20px;
    .comment-open-app-btn {
      border: 2px solid #ea6f5a;
      color: #ea6f5a;
      background-color: transparent;
      border-radius: 4px;
      text-align: center;
      width: 250px;
      height: 45px;
      padding: 10px 30px;
      font-size: 16px;
    }
  }
}
</style>
