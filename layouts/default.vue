<template>
  <v-app>
    <TheHeader />
    <v-content>
        <nuxt />
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

<style lang="scss">
  @import '../assets/styles/colors.scss';
  html {
    font-family: 'Open Sans', sans-serif;
    background-color: $lime;
  }
  body {
    margin: 0;
    background-color: $lime;
  }
  .page .v-responsive, .header .v-responsive {
    max-width: 1200px;
    color: $dark-grey;
  }
  .v-responsive__content {
    padding: 0 0 5px 0;
  }
  #appHeader.v-toolbar {
    background-color: $lime !important;
  }
  #appHeaderIndex.v-toolbar {
    background-color: transparent;
    box-shadow: none !important;
  }
  header.v-app-bar {
    z-index: 1000 !important;
  }
  header.v-toolbar, .v-toolbar__content {
    height: 90px !important;
  }
  .v-footer, main {
    background-color: $mint-grey !important;
    color: $blue !important;
    padding-left: 0 !important;
  }
  #appIntro .v-footer {
    background-color: $lime !important;
  }
  .v-card {
    border-radius: 0 !important;
    color: $dark-grey !important;
  }
  .v-input__slot, .v-input__slot div label.primary--text {
    color: $lime !important;
  }
  .post-form .v-toolbar__content {
    padding: 0 !important;
  }
</style>
