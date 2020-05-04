<template>
  <v-app-bar fixed :id="headerID" class="header">
    <v-responsive class="mx-auto">
      <v-row no-gutters style="flex-wrap: nowrap;">
        <v-col cols="6" class="logo" v-if="$vuetify.breakpoint.mdAndUp">
          <nuxt-link to="/"><img alt="Logo slowhiker" itemprop="logo" src="/img/logo_slowhiker.png" ></nuxt-link>
        </v-col>
        <v-col cols="6" class="logoSmall" v-else>
          <nuxt-link to="/"><img alt="Logo slowhiker klein" itemprop="logo" src="/img/logo_slowhiker_sm.png"></nuxt-link>
        </v-col>
        <v-col cols="3" class="nav" v-if="$vuetify.breakpoint.mdAndUp">
          <div class="nav__listItem">
            <nuxt-link to="/posts">Touren</nuxt-link>
          </div>
          <div class="nav__listItem">
            <nuxt-link to="/about">Über mich</nuxt-link>
          </div>
        </v-col>
        <v-col cols="3" class="icons" v-if="$vuetify.breakpoint.mdAndUp">
          <img alt="Icon Liste" itemprop="logo" src="/img/icon_list.png">
          <img alt="Icon Schweiz" itemprop="logo" src="/img/icon_schweiz.png">
        </v-col>
      </v-row>
    </v-responsive>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHeader.vue',
  computed: {
    headerID () {
      return (this.$route.name === 'index') ? 'appHeaderIndex' : 'appHeader'
    }
  }
}
</script>

<style scoped>
  .icons {
    text-align: right;
    padding: 0 20px 0 0;
  }
  .nav .nav__listItem {
    margin: 14px 0 0 30px;
    padding: 0;
    float: left;
    color: #fafafa;
    font-size: 18px;
  }
  .logo img {
    margin: 6px 0 0 20px;
  }
  .logoSmall img {
    margin: 0 0 0 20px;
  }
  .icons img {
    margin: 12px 0 0 8px;
  }
  .nav__listItem a {
    color: #fafafa;
    text-decoration: none;
  }
  .nav__listItem a:hover {
    color: #0d47a1
  ;
  }
</style>
