<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <span class="title">
          <img
            src="data:image/png;base64,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"
            alt=""
          />滨雅智慧管控平台</span
        >
      </div>

      <el-form-item style="margin: 0 0 30px 0">
        <el-input
          prefix-icon="el-icon-user"
          placeholder="账号"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          prefix-icon="el-icon-unlock"
          placeholder="密码"
          v-model="loginForm.password"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item class="code">
        <el-input
          class="code_input"
          placeholder="验证码"
          prefix-icon="el-icon-picture-outline-round"
        ></el-input>
        <img v-if="captcha" :src="captcha" @click="getCode"/>
        <img v-if="!captcha" src="../../assets/login/checkcode.png" @click="getCode"/>
      </el-form-item>
      <el-checkbox v-model="loginForm.remember_me" style="margin: 0 0 25px 0">
        记住我
      </el-checkbox>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import { code } from "@/api/user";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入用户名!"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("请输入六位及以上密码!"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "123456",
        remember_me: false,
        // 验证码
        captcha: "",
        // 时间戳
        checkKey: 0,
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      captcha: "",
    };
  },
  created() {
    this.getCode()
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    getCode() {
      code().then((res) => {
        this.captcha=res
      });
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #000;
$cursor: rgba(0, 0, 0, 0.8);

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  margin-top: 10px;
  .el-input {
    display: inline-block;
    height: 30px;
    width: 100%;
  }
  .el-button {
    width: 100%;
  }
  .code_input {
    width: 70%;
    flex: 1;
  }
  img {
    margin-left: 10px;
    margin-top: 10px;
  }
  .el-form-item__content {
    line-height: 36px;
    position: relative;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: rgba(0, 0, 0, 0.85);
$backgroundImage: "../../assets/login/background.svg";

.login-container {
  min-height: 100%;
  width: 100%;
  background: #f0f2f5 url($backgroundImage) no-repeat 50%;
  overflow: hidden;
  margin: 0;

  .login-form {
    position: relative;
    width: 416px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      img {
        width: 44px;
        height: 44px;
        margin-bottom: -4px;
        margin-right: 20px;
      }
      font-size: 33px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
