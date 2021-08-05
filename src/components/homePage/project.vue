<template>
  <div>
    <vueHead />
    <vueBody />
    <vueFoot />
  </div>
</template>

<script>
import vueHead from './head.vue'
import vueBody from './body.vue'
import vueFoot from './foot.vue'
export default {
  name: 'project',
  components: {
    vueBody,
    vueHead,
    vueFoot
  },
  data: function () {
    return {}
  }
}
</script>

<style scoped lang="scss">
</style>
