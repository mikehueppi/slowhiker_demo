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
          <div :class="navClassTours">
            <nuxt-link to="/posts">Touren</nuxt-link>
          </div>
          <div :class="navClassAbout">
            <nuxt-link to="/about">Über mich</nuxt-link>
          </div>
        </v-col>
        <v-col cols="3" class="icons" v-if="$vuetify.breakpoint.mdAndUp">
          <nuxt-link to="/posts"><img alt="Icon Liste" itemprop="logo" :src="iconList"></nuxt-link>
          <nuxt-link to="/map"><img alt="Icon Schweiz" itemprop="logo" :src="iconMap"></nuxt-link>
        </v-col>
      </v-row>
    </v-responsive>
    <div class="nav-mobile" v-if="$vuetify.breakpoint.smAndDown">
      <div class="row">
        <div
          :class="iconNavMobile"
          @click="openNavMobile"
          v-bind="attrs"
          v-on="on"
        >
          <span class="icon-line"></span>
          <span class="icon-line"></span>
          <span class="icon-line"></span>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheHeader.vue',
  data () {
    return {
      isOpenNavMobile: false
    }
  },
  computed: {
    headerID () {
      return (this.$route.name === 'index') ? 'appHeaderIndex' : 'appHeader'
    },
    iconList () {
      return (this.$route.name === 'posts') ? '/img/icon_list_active.png' : '/img/icon_list.png'
    },
    iconMap () {
      return (this.$route.name === 'map') ? '/img/icon_schweiz_active.png' : '/img/icon_schweiz.png'
    },
    iconNavMobile () {
      return (this.isOpenNavMobile) ? 'menu-icon checked' : 'menu-icon'
    },
    navClassTours () {
      return (this.$route.name === 'posts' || this.$route.name === 'map') ? 'nav__listItem active' : 'nav__listItem'
    },
    navClassAbout () {
      return (this.$route.name === 'about') ? 'nav__listItem active' : 'nav__listItem'
    }
  },
  methods: {
    openNavMobile () {
      this.isOpenNavMobile = !this.isOpenNavMobile
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/styles/colors.scss';
  #appHeader .nav__listItem, #appHeaderIndex .nav__listItem {
    padding-top: 22px !important;
  }
  #appHeader .icons, #appHeaderIndex .icons {
    padding-top: 12px !important;
  }
  .icons {
    text-align: right;
    padding: 0 20px 0 0;
  }
  .nav .nav__listItem {
    margin: 14px 0 0 30px;
    padding: 0;
    float: left;
    color: $white;
    font-size: 18px;
  }
  .logo img {
    margin: 6px 0 0 20px;
  }
  .logoSmall {
    margin-left: 140px;
  }
  .logoSmall img {
    margin: 0 0 0 20px;
  }
  .icons img {
    margin: 12px 0 0 8px;
  }
  .nav__listItem a {
    color: $white;
    text-decoration: none;
  }
  .nav__listItem a:hover, .active a {
    color: $blue;
  }
  .nav-mobile .v-menu__content {
    background-color: #ffff00 !important;
  }
  .nav-mobile__list {
    position: absolute;
    top: 120px;
    left: 12px;
    z-index: 1000;
  }
  .menu-icon {
    position: absolute;
    top: 24px;
    left: 24px;
    display: block;
    background: transparent;
    width: 48px;
    height: 36px;
    cursor: pointer;
    transition: border-radius .5s;
  }
  .icon-line {
    position: absolute;
    top: 0;
    left: 0;
    height: 4px; width: 38px;
    background: $white;
    border-radius: 2px;
    display: block;
    transition: 0.5s;
    transform-origin: center;
  }
  .icon-line:nth-child(1) {
    top: 0;
  }
  .icon-line:nth-child(2) {
    top: 12px;
  }
  .icon-line:nth-child(3) {
    top: 24px;
  }
  .menu-icon.checked .icon-line:nth-child(1){
    transform: translateY(12px) rotate(-45deg);
  }
  .menu-icon.checked .icon-line:nth-child(2){
    opacity:0;
  }
  .menu-icon.checked .icon-line:nth-child(3){
    transform: translateY(-12px) rotate(45deg);
  }
</style>
