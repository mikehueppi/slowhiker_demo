<template>
  <v-app>
    <TheHeader />
    <v-content>
      <!--<v-container>-->
        <nuxt />
      <!--</v-container>-->
    </v-content>
  </v-app>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
// import TheSidenav from '@/components/Navigation/TheSidenav'
export default {
  components: {
    TheHeader
    // TheSidenav
  },
  data () {
    return {
    }
  }
}
</script>

<style>
  html {
    font-family: 'Open Sans', sans-serif;
    background-color: #9ccc65;
  }
  body {
    margin: 0;
    background-color: #9ccc65;
  }
</style>
