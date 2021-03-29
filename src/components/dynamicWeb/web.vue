<template>
<div>
  <el-row>
    <el-col :span="24"><h1 style="text-align:center">动态路由</h1></el-col>
  </el-row>
  <el-row>
    <el-col :span="24" v-for="(item,index) in webData" :key="index" style="line-height: 38px;">
      <a style="cursor: pointer;color:blue" @click="jump(item.id)">{{item.name}}</a>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'web',
  data: function () {
    return {
      webData: [
        { name: '第一个页面', id: '111111111' },
        { name: '第二个页面', id: '222222222' },
        { name: '第三个页面', id: '333333333' },
        { name: '第四个页面', id: '444444444' },
        { name: '第五个页面', id: '555555555' },
        { name: '第六个页面', id: '666666666' },
        { name: '第七个页面', id: '777777777' },
        { name: '第八个页面', id: '888888888' },
        { name: '第九个页面', id: '999999999' }
      ]
    }
  },
  methods: {
    jump (id) {
      this.$router.push(`/jump/${id}`)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
