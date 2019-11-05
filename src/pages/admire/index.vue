<template>
  <div>
    <div id="reward-panel">
      <div class="user-panel">
        <div class="background">
          <button class="close-btn" @click="targetArticle">
            <i class="iconfont ic-close iconhebingxingzhuang"></i>
          </button>
        </div>
        <div class="author">
          <div class="avatar">
            <img
              src="https://upload.jianshu.io/users/upload_avatars/2259045/5d2e817c-f862-4c4f-b8c0-83ce96e8331b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180/format/webp" />
          </div>
          <h3>麦大人</h3>
          <p>世间所有的相遇，都是久别重逢！</p>
        </div>
      </div>
      <!-- 固定 -->
      <!-- <div class="pay" className={["pay ",!this.state.isShowInput ? 'hide' :'' ].join('')}> -->
      <div class="pay" :class="{'hide':!isShowInput}">
        <div class="btn-group">
          <button class="btn btn-left">
            2<span> 颗</span>
            <div class="amount">¥2.00</div>
          </button>
          <button class="btn btn-middle">
            5<span> 颗</span>
            <div class="amount">¥5.00</div>
          </button>
          <button class="btn btn-right">
            10<span> 颗</span>
            <div class="amount">¥10.00</div>
          </button>
        </div>
        <div class="btn-group">
          <button class="btn btn-left">
            20<span> 颗</span>
            <div class="amount">¥20.00</div>
          </button>
          <button class="btn btn-middle">
            50<span> 颗</span>
            <div class="amount">¥50.00</div>
          </button>
          <button class="btn btn-right">
            100<span> 颗</span>
            <div class="amount">¥100.00</div>
          </button>
        </div>
        <button class="custom-amount" @click="showInput">其它数量</button>
      </div>
      <!-- 自定义 -->
      <!-- <div class="custom hide" className={["custom ",this.state.isShowInput ? 'hide' :'' ].join('')}> -->
      <div class="custom" :class="{'hide':isShowInput}">
        <div class="close-bar">
          <button class="close" @click="showInput">×</button>
        </div>
        <label>
          数量: <input placeholder="可输入 1~200 颗" type="number" />
          <h6>颗</h6>
        </label>
        <a>
          <button class="btn btn-enter">确认支付 ¥2</button>
        </a>
      </div>
      <div class="reward-tips">安全提示：您正在对其他用户进行赞赏，一但支付，不可返还。请谨慎使用，谨防诈骗。</div>
    </div>
  </div>
</template>

<script>
import articleBody from '@/components/article-body';
import comment from '@/components/comment';
import recommend from '@/components/recommend';
import articleFooter from '@/components/article-footer';

export default {
  data() {
    return {
      title: 'components',
      isShowInput: true
    };
  },
  components: {
    articleBody,
    comment,
    recommend,
    articleFooter
  },
  methods: {
    sample() {},
    showInput() {
      this.isShowInput = !this.isShowInput;
    },
    targetArticle() {
      wx.navigateTo({ url: '/pages/article/main' });
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.btn {
  margin: 0;
}
#reward-panel {
  color: #333;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #fff;
  .user-panel {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    .background {
      height: 80px;
      background-color: #ea6f5a;
      border-radius: 0 0 60% 60%/0 0 90% 90%;
      -webkit-box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
      text-align: right;
      button {
        position: relative;
        right: 10px;
        top: 5px;
        color: #fff;
      }
    }
    .author {
      text-align: center;
      margin: -32px 10% 0;
      border-bottom: 1px solid;
      border-color: #f0f0f0;
      .avatar {
        margin: 0 auto;
        border-radius: 50%;
        border: 1px solid;
        width: 66px;
        height: 66px;
        border-color: #f0f0f0;
        img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 33px;
        }
      }
      h3 {
        margin: 20px 0 0;
        font-size: 24px;
        font-weight: 400;
        line-height: 1.2;
        height: 28px;
        color: #333;
      }
      p {
        margin: 5px 0 20px;
        font-size: 14px;
        line-height: 1.5;
        color: #999;
      }
    }
  }
  //固定
  .pay {
    margin-top: 35px;
    padding: 0 5%;
    text-align: center;
    button {
      display: inline-block;
      width: 30%;
    }
    span {
      margin-right: -3px;
      font-size: 13px;
    }
    .btn {
      position: relative;
      padding: 5px 0;
      border: 2px solid #ea6f5a;
      border-radius: 4px;
      text-align: center;
      font-size: 26px;
      line-height: 1.3;
      color: #ea6f5a;
    }
    .btn-group {
      padding-top: 5px;
      margin-bottom: 20px;
      overflow: hidden;
    }
    .btn-left {
      float: left;
    }
    .btn-middle {
    }
    .btn-right {
      float: right;
    }
    .amount {
      font-size: 12px;
      color: #b5b5b5;
    }
    .custom-amount {
      font-size: 14px;
      color: #3194d0;
    }
  }
  //自定义
  .hide {
    display: none;
  }
  .custom {
    padding: 0 5%;
    .close-bar {
      margin-top: 15px;
      text-align: left;
      .close {
        color: #333;
      }
    }
    label {
      margin-top: 10px;
      padding: 12px;
      display: block;
      text-align: left;
      border: 1px solid #eee;
      border-radius: 3px;
      color: #ea6f5a;
    }
    input {
      -webkit-appearance: none;
      border: none;
      width: -webkit-calc(100% - 80px);
      width: calc(100% - 80px);
      font-size: 16px;
      background-color: transparent;
    }
    h6 {
      float: right;
      margin: 0;
      font-size: 16px;
      font-weight: 400;
    }
    .btn-enter {
      display: block;
      padding: 10px 0;
      margin-top: 25px;
      text-align: center;
      background-color: #ea6f5a;
      border-radius: 3px;
      color: #fff;
      width: 100%;
      height: 45px;
    }
  }
  .reward-tips {
    font-size: 12px;
    color: #ea6f5a;
    padding-left: 30px;
    padding-right: 30px;
    position: absolute;
    left: 0;
    bottom: 20px;
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
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  text-transform: none;
}
img {
  max-width: 100%;
  border-style: none;
}
</style>
