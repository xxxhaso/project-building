<template>
<div>
  <el-row class="el-row">
    <el-col :span="4"></el-col>
    <el-col :span="16"></el-col>
    <el-col :span="4" style="text-align:center;font-size:20px;"><languageSelect/></el-col>
  </el-row>
</div>
</template>

<script>
import languageSelect from '../languageSelect'
export default {
  name: 'i18n',
  components: { languageSelect },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.el-row{
  background-color:#F0F1F1;
  height:40px
}
</style>
