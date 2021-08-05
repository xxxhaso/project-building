<template>
<div>
  <div style="display: flex;height: 300px;width: 100%;align-items: center;justify-content: center;">
    <p>第一种垂直居中CSS</p>
  </div>
  <div style="width:100%;height:300px;display:table">
    <p style="display:table-cell;vertical-align:middle">第二种垂直居中CSS</p>
  </div>
</div>

</template>

<script>
export default {
  name: 'content',
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
