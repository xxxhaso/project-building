<template>
<div>
<el-button @click="increated">counts:{{count}},double is{{double}}, click to increated</el-button>
<el-col>
  <p v-for="item in arr" :key="item.index">{{item.age}}</p>
  <div id="allmap" class="allmap" />
</el-col>
</div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import outF from './functionOne'

export default {
  setup () {
    const count = ref(0)
    const obj = reactive({ age: 10 })
    const arr = reactive([{ age: 10 }, { age: 20 }])
    const double = computed(() => count.value * 2)
    function increated () {
      count.value++
      outF()
    }

    // onMounted(() => { console.log(arr) })
    // onMounted(() => console.log('Conponent mounted'))

    const mymap = ref(undefined)
    onMounted(() => { initMap() })
    function initMap () {
      const map = new window.BMap.Map('allmap', { enableMapClick: false })
      // 初始化地图,设置中心点坐标和地图级别
      mymap.value = map
      console.log(mymap.value)
      map.centerAndZoom(new window.BMap.Point(116.403748, 39.914336), 16)
    }
    return {
      count,
      double,
      increated,
      obj,
      arr,
      mymap
    }
  }
}
</script>

<style scoped lang="scss">
.allmap {
  height: 994px;
  width:1000px;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
</style>
