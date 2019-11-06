<template>
  <div class="login-container">
    <div class="login-wrap">
      <div class="login-form">
        <div class="login-form-uername">
          <i class="iconfont iconuser"></i>
          <input type="text" name="" id="" placeholder="手机号或者邮箱">
        </div>
        <div class="login-form-password">
          <i class="iconfont iconmima"></i>
          <input type="text" name="" id="" placeholder="请输入密码">
        </div>
      </div>
      <div class="login-btn-wrap">
        <button class="btn btn-danger" @click="signIn">
          登录
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card';

export default {
  data() {
    return {
      title: 'components'
    };
  },
  components: {
    card
  },
  methods: {
    signIn() {
      wx.navigateTo({ url: '/pages/my/main' });
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.login-container {
  .login-wrap {
    // margin: 15px;
    .login-form {
      margin: 15px;
      input,
      .iconfont {
        display: inline-block;
      }
      input {
        height: 50px;
        flex: 1;
      }
      .iconfont {
        font-size: 25px;
        color: gray;
        vertical-align: top;
        margin: 12px 15px 0px 15px;
        width: 25px;
      }
      .login-form-uername {
        border: 1px solid gray;
        border-radius: 5px 5px 0 0;
        display: flex;
        .iconfont.iconuser {
        }
      }
      .login-form-password {
        border: 1px solid gray;
        border-radius: 0 0 5px 5px;
        .iconfont.iconmima {
        }
      }
      > div:first-child {
        border-bottom: none;
      }
    }
    .login-btn-wrap {
      padding: 0 15px;
      .btn {
        width: 100%;
        margin: 0;
        margin-bottom: 15px;
        border-radius: 5px;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        &.btn-danger {
          background-color: #ea6f5a;
          color: white;
          &.button-hover {
            background-color: #e2705b !important;
          }
        }
      }
    }
  }
}
</style>
