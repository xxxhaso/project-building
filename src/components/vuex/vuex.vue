<template>
<div style="background-color:#F0F1F1">
  <el-row>
    <el-col :span="24">{{$t('vuex.title')}}</el-col>
  </el-row>
  <el-row >
    <el-col :span="6"><el-button @click="vuex">打印vuex数据</el-button></el-col>
    <el-col :span="6"><el-button v-if="vif">VUEX</el-button></el-col>
    <el-col :span="6"><el-button @click="pushCollects(items)">mutations(同步)</el-button></el-col>
    <el-col :span="6"><el-button @click="showFooter(items)">action(异步)1</el-button></el-col>
  </el-row>
</div>
</template>

<script>
import { getMapCsv } from '@/api/login'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'vuex',
  data: function () {
    return {
      endTime: 123123,
      Condition: [],
      items:
        {
          id: 0,
          name: 'ljw',
          sex: 'man'
        }
    }
  },
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
    this.getMapCsv()
  },
  methods: {
    getMapCsv () {
      getMapCsv().then((response) => {
        console.log(response)
        // 打印不出数据
      })
    },
    vuex () {
      console.log(this.vif)
      console.log(this.isShow)
      console.log(this.mydata)
      console.log(this.second)
      console.log(this.myfristdata)
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
