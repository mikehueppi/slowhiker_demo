<template>
  <v-layout align-center justify-center>
    <v-carousel
      cycle
      show-arrows-on-hover
      :height=window.height/100*70
      hide-delimiters
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
            <v-img
            class="intro-image"
            :src=slide
            :height=window.height/100*70
            />
      </v-carousel-item>
    </v-carousel>
    <div class="page" id="appIntro">
      <v-responsive class="mx-auto app-intro-container">
          <v-row>
            <v-col cols="12" md="12">
              <div class="app-intro-text">
                <v-btn
                  block
                  x-large
                  outlined
                  color="#fafafa"
                  class="app-button"
                  @click="$router.push('posts')"
                >Touren</v-btn>
                <p>Um der stürmischen Hektik des Alltags zu entfliehen, mache ich gerne Ausflüge in der Natur, tanke dort Kraft und Energie und geniesse die Stille. Dabei entdecke ich immer wieder unscheinbare Phänomene und kleine Wunder.</p>
                <p>In den letzten Jahren ist mir bewusst geworden, dass es auch in der heimischen Umgebung viel Schönes und Faszinierendes zu entdecken gibt. Mit diesem Blog möchte ich dir die Augen öffnen und dich dazu inspirieren, die Welt vor deiner Haustür zu entdecken.</p>
                <p><span><nuxt-link to="/admin">&copy;</nuxt-link> {{ new Date().getFullYear() }}</span></p>
              </div>
            </v-col>
            <!--<v-col cols="12" md="4">
              <v-card class="app-intro-list">
                <h2>Aktuellste Touren</h2>
                <PostShortlist />
              </v-card>
            </v-col>-->
          </v-row>
      </v-responsive>
    </div>
  </v-layout>
</template>

<script>
// import PostShortlist from '@/components/posts/PostShortlist'
export default {
  components: {
    // PostShortlist
  },
  data () {
    return {
      slides: [
        '/touren/img/header_weissenstein.jpg',
        '/touren/img/header_schinberg.jpg',
        '/touren/img/header_wasserschloss.jpg',
        '/touren/img/header_weissberg3.jpg',
        '/touren/img/header_aletsch.jpg',
        '/touren/img/header_rasa.jpg',
        // '/touren/img/header_loco.jpg',
        // '/touren/img/header_weissberg2.jpg',
        '/touren/img/header_edelweiss.jpg',
        '/touren/img/header_unterbaech.jpg',
        '/touren/img/header_reusstal.jpg',
        // '/touren/img/header_linn2.jpg',
        '/touren/img/header_weissberg.jpg',
        '/touren/img/header_matterhorn.jpg',
        '/touren/img/header_reusstal2.jpg',
        // '/touren/img/header_tuefelscheller.jpg',
        '/touren/img/header_wildspitz.jpg',
        '/touren/img/header_wildspitz2.jpg',
        // '/touren/img/header_schinberg2.jpg',
        '/touren/img/header_schinberg3.jpg'
      ],
      window: {
        width: 0,
        height: 0
      }
    }
  },
  beforeMount () {
    addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeDestroy () {
    removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      if (process.client) {
        this.window.width = window.innerWidth
        this.window.height = window.innerHeight
      }
    }
  }
}
</script>

<style scoped>
  .intro-image2  {
    position: absolute !important;
    width: 100% !important;
    height: 70% !important;
    z-index: 20 !important;
    top: 0 !important;
    background-size: cover !important;
  }
  .intro-image .v-image__image {
    position: absolute !important;
    width: 100% !important;
    height: 70% !important;
    z-index: 20 !important;
    top: 0 !important;
    background-size: cover !important;
  }
  #appIntro {
    position: absolute;
    width: 100%;
    height: 30%;
    bottom: 0;
    background-color: #9ccc65 !important;
    border-top: #fafafa 12px solid;
  }
  .app-intro-container {
    padding: 20px 0 0 0 !important;
  }
  .app-intro-text {
    color: #fafafa;
    font-size: 18px;
    padding: 0 20px 0 20px;
  }
  .app-intro-text a {
    color: #fafafa;
    text-decoration: none;
  }
  .app-intro-list h2 {
    font-size: 18px;
    font-weight: 500;
    padding: 20px 20px 8px 20px;
  }
  .app-button {
    margin: 0 0 30px 0;
    border: solid 4px #fafafa !important;
  }
  .marker {
    position: absolute;
    bottom:35%;
    right: 20%;
    z-index: 30;
  }
  .marker img {
    float: left;
  }
  .marker p {
    font-size: 20px;
    padding: 15px 0 0 20px;
    float: left;
  }
</style>
