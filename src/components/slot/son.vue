<template>
<div>
 <h1>子组件标题</h1>
 <slot></slot>
 <!-- 默认插槽会显示父组件中写在子组件中的数据 -->
</div>
</template>

<script>
export default {
  name: 'son',
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
