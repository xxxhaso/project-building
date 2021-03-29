<template>
<div>
  <a @click="compute" style="cursor: pointer;">{{language}}</a>
</div>
</template>

<script>
// import i18n from '../../lang'
export default {
  name: 'languageSelect',
  data: function () {
    return {
      language: '中文'
    }
  },
  watch: {

  },
  mounted () {
    this.compute()
  },
  methods: {
    compute () {
      if (this.$i18n.locale === 'zh') {
        this.$i18n.locale = 'en'
        this.language = '中文'
      } else {
        this.$i18n.locale = 'zh'
        this.language = 'English'
      }
      // console.log(this.$i18n.locale)
    }

  }
}
</script>

<style scoped lang="scss">
</style>
