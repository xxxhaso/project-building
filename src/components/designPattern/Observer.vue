<template>
  <div>
    <el-row>
      <el-col style="text-align:center">
        <h3>观察者模式</h3>
        <p>当一个变量值被修改时，可以自动通知所有关注这个变量的其他对象，自动重新更新获取这个变量的新值。</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button @click="conso">测试观察者模式</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { observe } from './Observer.js'
export default {
  name: 'Observer',
  data: function () {
    return {
    }
  },
  mounted () {
    observe.on('chuandi', (data) => {
      debugger
    })
  },
  methods: {
    conso () {
      observe.emit('chuandi', '参数1')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
