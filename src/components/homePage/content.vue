<template>
<div>
  <div style="display: flex;height: 300px;width: 100%;align-items: center;justify-content: center;">
    <p>第一种垂直居中CSS</p>
  </div>
  <div style="width:100%;height:300px;display:table">
    <p style="display:table-cell;vertical-align:middle">第二种垂直居中CSS</p>
  </div>
  <div id="main" style="width: 100%; height: 400px"></div>
  <el-button @click="conso">打印</el-button>
  {{num}}
</div>

</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'content',
  data: function () {
    return {
      num: [1, 2, 3, 4, 5]
    }
  },
  mounted () {
    var myChart = echarts.init(document.getElementById('main'))
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
    myChart.setOption(option)
  },
  methods: {
    conso () {
      this.$nextTick(() => {
        this.num = [2, 2, 2, 2, 2, 2]
      })
    }

  }
}
</script>

<style scoped lang="scss">
</style>
