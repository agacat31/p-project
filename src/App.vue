<template>
  <v-app id="inspire">
    <baseTemplate></basetemplate>
  </v-app>
</template>
<style src="./styles/main.scss" lang="scss"></style>
<script>
  import Base from './components/base/base.vue'
  export default {
    components: {
      'baseTemplate': Base
    }
  }
</script>