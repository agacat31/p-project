<template>
  <v-app id="p-project">
    <sidebarTemplate v-if='auth'></sidebartemplate>
    <sidebarRightTemplate v-if='auth'></sidebarRightTemplate>
    <navbarTemplate v-if='auth'></navbartemplate>
    <contentTemplate></contenttemplate>
  </v-app>
</template>
<script>
  import store from '@/store'
  import { mapGetters } from 'vuex'
  import Navbar from './navigation.vue'
  import Sidebar from './sidebar.vue'
  import SidebarRight from './sidebarRight.vue'
  import Content from './content.vue'
  export default {
    components: {
      'navbarTemplate': Navbar,
      'sidebarTemplate': Sidebar,
      'sidebarRightTemplate': SidebarRight,
      'contentTemplate': Content
    },
    beforeCreate () {
      if (!this.$session.exists()) {
        store.dispatch('setAuth', false)
        this.$router.push('/login')
      }
    },
    computed: mapGetters({
      auth: 'auth'
    })
  }
</script>