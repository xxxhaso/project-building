<template>
<div>
  <h3>父组件</h3>
<son>
  <h1>子组件插槽标题</h1>
  <p>子组件内容</p>
  </son>
</div>
</template>

<script>
import son from './son.vue'
export default {
  components: {
    son
  },
  name: 'parent',
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

</style>
