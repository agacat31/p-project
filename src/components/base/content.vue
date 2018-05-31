<template>
  <v-content>
	<v-container fluid>
	  <transition name="fade" mode="out-in" :duration="{ enter: 100, leave: 50 }">
	    <router-view />
	  </transition>
	</v-container>
  </v-content>
</template>