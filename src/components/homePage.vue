<template>
  <div >
    <el-row style="margin-top:150px">
      <el-col :span="6" class="box">
        <p style="text-align:center">系统登录</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px">
          <el-form-item label="账号" prop="account" >
            <el-input v-model="ruleForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" >
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%" @click="jump('ruleForm')" >登录</el-button>
            <el-button @click="test">测试</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import createStore from '../store/index.js'
export default {
  name: 'homePage',
  data: function () {
    return {
      loading: false,
      ruleForm: {
        account: 'xhxhxhy',
        password: 'kunapikal1'
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    jump (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid && this.ruleForm.account === 'xhxhxhy' && this.ruleForm.password === 'kunapikal1') {
          this.$router.push({ path: '/vuexFunc' })
        } else {
          alert('账号或密码错误')
          console.log('error submit!!')
          return false
        }
      })
    },
    test () {
    }
  }
}
</script>

<style scoped lang="scss">
// a{
//   display: inline-block;
//   width:100%
// }
// .changeSt{
// width:100%;
// background-color: aliceblue
// }
.box{
   border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
   margin:0 auto;
   padding:25px 45px 25px 25px

}
</style>
