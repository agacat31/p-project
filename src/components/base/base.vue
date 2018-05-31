<template>
  <v-app id="inspire">
    <sidebarTemplate></sidebartemplate>
    <navbarTemplate></navbartemplate>
    <contentTemplate></contenttemplate>
  </v-app>
</template>
<script>
  import Navbar from './navigation.vue'
  import Sidebar from './sidebar.vue'
  import Content from './content.vue'
  export default {
    components: {
      'navbarTemplate': Navbar,
      'sidebarTemplate': Sidebar,
      'contentTemplate': Content
    }
  }
</script>