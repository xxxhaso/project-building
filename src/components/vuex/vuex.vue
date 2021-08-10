<template>
  <div style="background-color:#F0F1F1">
    <el-row>
      <el-col>{{$t('vuex.title')}}</el-col>

    </el-row>
    <el-row >
      <el-col :span="12" style="margin-top:50px">
        <el-button @click="pushCollects(items)">辅助函数传参调用Vuex Mutations同步方法</el-button>
        <el-button @click="vuexMutations">普通方法调用Vuex Mutations同步方法</el-button>
      </el-col>
      <el-col :span="12" style="margin-top:50px">
        <el-button @click="showFooter(items)">辅助函数传参调用Vuex Actions异步方法</el-button>
        <el-button @click="vuexActions">普通方法调用Vuex Actions异步方法</el-button>
      </el-col>
      <el-col :span="12" style="margin-top:50px">
        <el-button @click="vuexGetters">调用Vuex Getters的普通方法</el-button>
        <p>{{$store.getters['first/getChangeNum']}} 普通调用Vuex Getters展示在标签</p>
        <p>{{vif}} 辅助函数调用Vuex Getters展示在标签</p>
      </el-col>
      <el-col :span="12" style="margin-top:50px">
        <el-button @click="vuexState">调用Vuex State的普通方法</el-button>
        <p>{{$store.state.first.changeNum}} 普通方法调用Vuex State展示在标签</p>
        <p>{{isShow}} 辅助函数调用Vuex State展示在标签</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'vuex',
  data: function () {
    return {
      endTime: 123123,
      Condition: [],
      items: {
        id: 0,
        name: 'ljw',
        sex: 'man'
      }
    }
  },
  // created () {
  //   this.$store.subscribe((mutation, state) => {
  //     debugger
  //       console.log('mutation.type', mutation)
  //       console.log('mutation.payload', mutation.payload)
  //       console.log('state.a', state.a)
  //     })
  // },
  computed: {
    myfristdata () {
      // 这种方式也可以直接获取vuex中的数据，this.$store是引用数据 state.first.changeNum是VUEX中文件名为first中的state状态中的changeNum数据
      return this.$store.state.first.changeNum
    },
    ...mapState({
      // isShow是变量名 first是外连的JS名，ChangeNum是在VUEX中定义的变量名
      isShow: state => state.first.changeNum,
      mydata: state => state.first.collects,
      second: state => state.second.secondNum
    }),
    ...mapGetters('first', {
      vif: 'isShow'
    })
  },
  mounted () {
  },
  methods: {
    vuexMutations () {
      this.$store.commit('first/exampleMutations', {
        ID: 100,
        BrandID: 402
      })
      console.log(this.$store.state.first.changeNum)
    },

    vuexActions () {
      this.$store.dispatch('first/exampleActions', {
        ID: 999,
        BrandID: 402
      }).then(() => {
        console.log('成功了')
      }).catch(() => {
        console.log('失败了')
      })
      console.log(this.$store.state.first.changeNum)
    },

    vuexGetters () {
      console.log(this.$store.getters['first/getChangeNum'])
    },

    vuexState () {
      console.log(this.$store.state.first.changeNum)
    },

    ...mapActions('first', [
      // first是store中的JS文件 showFooter是再First中定义的方法
      'showFooter'
    ]),

    // 同步提交数据
    ...mapMutations('first', [
      'pushCollects'
    ])
  }
}
</script>

<style scoped lang="scss">
</style>
