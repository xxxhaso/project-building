<template>
  <div class="home">
    <homePage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import homePage from '@/components/homePage.vue'

export default {
  name: 'Home',
  components: {
    homePage
  }
}
</script>
