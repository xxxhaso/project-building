<template>
  <div>
    <el-row>
      <el-col :span="4">
      <el-menu
      default-active="1"
      class="el-menu-vertical-demo changeSt"
      background-color="aliceblue"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link to="/address"><i class="el-icon-location"></i>地区地区</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/postman"><i class="el-icon-location"></i>员工员工</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/computeNum"><i class="el-icon-location"></i>计算计算</router-link></el-menu-item>
    </el-menu>
      </el-col>
      <el-col :span="20"><router-view/></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data: function () {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
a{
  display: inline-block;
  width:100%
}
.changeSt{
width:100%;
background-color: aliceblue
}
</style>
