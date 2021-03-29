<template>
<div>
  <el-row>
    <el-col :span="8">
      <el-button @click="test">点击打印原型链数据</el-button>
    </el-col>
    <el-col :span="16">
      <img src="../../assets/20210307142153911.png" style="width:100%">
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'PrototypeChain',
  data: function () {
    return {
    }
  },
  methods: {
    test () {
      function Person (age, name) {
        // 构造函数
        this.age = age
        this.name = name
      }

      // Person.prototype原型对象   Person.prototype.constructor原型对象又指向构造函数
      console.log(Person.prototype.constructor)

      // 通过构造函数的原型添加一个方法
      Person.prototype.eat = function () {
        console.log('1123213123')
      }

      // per是实例对象
      var per = new Person(20, '男')
      console.log(per)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
