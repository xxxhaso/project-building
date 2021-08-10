<template>
  <div class="head">
    <el-row>
      <el-col :span="3">
        <img src="~@/assets/logo-head-3.jpg" style="height:60px;padding-left:126px;" alt="">
      </el-col>
      <el-col :span="13" style="padding-left:35px;;padding-top:2px">
        <el-menu
          :default-active="active"
          mode="horizontal"
          text-color="rgba(255, 255, 255, .75)"
          router
          active-text-color="#ffffff"
          style=" background:#233A40;color:rgba(255, 255, 255, .75)"
        >
          <el-menu-item index="/content" style="font-size:18px;font-weight: 500;font-family: Microsoft YaHei;background-color:#233A40;">首页</el-menu-item>
          <el-menu-item index="/vuexFunc" style="font-size:18px;font-weight: 500;padding-left:24px;font-family: Microsoft YaHei;background-color:#233A40;">VUEX</el-menu-item>
          <el-menu-item index="/i18n" style="font-size:18px;font-weight: 500;padding-left:24px;font-family: Microsoft YaHei;background-color:#233A40;">i18n</el-menu-item>
          <el-menu-item index="/designPattern" style="font-size:18px;font-weight: 500;padding-left:24px;font-family: 微软雅黑;background-color:#233A40;">原型链</el-menu-item>
          <el-menu-item index="/study" style="font-size:18px;font-weight: 500;padding-left:24px;font-family: 微软雅黑;background-color:#233A40;">学习</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8" >
        <img style="padding-top:24px;padding-left:161px;" src="~@/assets/search.svg" >
        <img
          style="margin-left:24px;"
          src="~@/assets/Upload.svg"
        >
        <img
          style="margin-left:24px;"
          src="~@/assets/Signin.svg"
        >
        <a style="margin-left:5px;font-weight:400;font-size: 18px;color: rgba(0,0,0,1); ;vertical-align: 10%;font-family:Microsoft YaHei;color:rgba(255, 255, 255, .75)" @click="signIn">登入</a>
        <img
          style="margin-left:24.88px;"
          src="~@/assets/login.svg"
        >
        <a style=";margin-left:5px;font-weight:400;font-size: 18px;color: rgba(0,0,0,1);vertical-align: 10%;font-family:Microsoft YaHei;color:rgba(255, 255, 255, .75)" @click="register">注册</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'vueHead',
  data () {
    return {
      active: this.$route.path
    }
  },
  mounted () {
    $('.el-menu').css({
      'border-bottom': '0px'
    })
    $('.is-active').css({
      'border-bottom': '0px'
    })
    this.$router.push(this.active)
  },
  methods: {
    signIn () {
      // this.$router.push('signIn')
    },
    register () {
      // this.$router.push('register')
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  position:static;
  min-width:1280px;
  width:100%;
  z-index:1993;
  margin-left:-17px;
  height: 64px;
  margin: auto;
  // padding-top:17px;
    background:#233A40;
  color:rgba(255, 255, 255, .75);
  box-shadow: 0px 1px 4px 0px rgba(0,21,41,0.12);
  // font-family: PingFangSC-Medium;
  // font-family: PINGFANG MEDIUM
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 0px solid #ffffff;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom: 0px solid #ffffff;
}

// @import '~@/styles/font.css'
</style>
