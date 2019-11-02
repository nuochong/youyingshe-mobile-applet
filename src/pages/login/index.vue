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
      <button class="btn btn-danger">
        登录
      </button>
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
    sample() {}
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.login-container {
  .login-wrap {
    margin: 15px;
    .login-form {
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
        border-radius: 5px;
        display: flex;
        .iconfont.iconuser {
        }
      }
      .login-form-password {
        border: 1px solid gray;
        border-radius: 5px;
        .iconfont.iconmima {
        }
      }
    }
    .btn.btn-danger {
      background-color: #ea6f5a;
      color: white;
      &.button-hover {
        background-color: #e2705b !important;
      }
    }
  }
}
</style>
