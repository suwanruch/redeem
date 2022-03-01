<template>
  <v-app>
    <v-main>
      <div v-if="$isMobile()">
      
      </div>
      <div v-else>
      
      </div>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  created () {
    document.title = "Redeem"
  },
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
