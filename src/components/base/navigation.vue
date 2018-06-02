<template>
  <v-toolbar
    color="blue darken-3"
    dark
    app
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    :clipped-right="$vuetify.breakpoint.mdAndUp"
    fixed
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="">P-Project</span> <!-- hidden-sm-and-down -->
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      prepend-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon @click.stop="drawerRight = !drawerRight">
      <v-icon>settings</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-btn icon large>
      <v-avatar size="32px" tile>
        <img
          src="https://vuetifyjs.com/static/doc-images/logo.svg"
          alt="Vuetify"
        >
      </v-avatar>
    </v-btn>
  </v-toolbar>
</template>
<script>
  import store from '@/store'
  export default {
    data: () => ({
      drawer: store.getters.drawer,
      drawerRight: store.getters.drawerRight
    }),
    props: {
      source: String
    },
    watch: {
      drawer (val) {
        store.dispatch('setDrawer', this.drawer)
      },
      drawerRight (val) {
        store.dispatch('setDrawerRight', this.drawerRight)
      }
    },
    methods: {
      goTo (path) {
        this.$router.push({ name: path })
      }
    }
  }
</script>