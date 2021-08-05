<template>
  <div>
    <el-row>
      <el-col>
         <el-menu
          :default-active="active"
          mode="horizontal"
          text-color="rgba(255, 255, 255, .75)"
          router
          active-text-color="#ffffff"
          style=" background:#233A40;color:rgba(255, 255, 255, .75)"
        >
          <el-menu-item index="/address" style="font-size:18px;font-weight: 500;font-family: Microsoft YaHei;background-color:#233A40;">个人用心</el-menu-item>
          <el-menu-item index="/vuex" style="font-size:18px;font-weight: 500;padding-left:24px;font-family: Microsoft YaHei;background-color:#233A40;">Vuex</el-menu-item>
          <el-menu-item index="/changeLanguage" style="font-size:18px;font-weight: 500;padding-left:24px;font-family: Microsoft YaHei;background-color:#233A40;">语言切换</el-menu-item>
          <el-menu-item index="/siteMap" style="font-size:18px;font-weight: 500;padding-left:24px;font-family: 微软雅黑;background-color:#233A40;">网页4</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import createStore from '../store/index.js'
export default {
  name: 'head',
  data: function () {
    return {
      active: this.$route.path
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
</style>
