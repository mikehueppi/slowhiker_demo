<template>
  <v-layout align-center justify-center>
    <div class="page" id="post">
      <v-responsive class="mx-auto post-container">
        <v-card class="post-card" color="posttab">
          <v-row>
            <v-col cols="12" md="12" class="post-image">
              <v-img
                id="postImage"
                :src="post.image"
                :width=window.width-40
                max-height="450"
              />
              <div class="container">
                <div class="post-content">
                  <v-tabs v-model="tab" color="posttab">
                    <v-tab
                      v-for="item in items"
                      :key="item.tab"
                      @click="tabid=item.tabnum"
                    >
                      {{ item.tab }}
                    </v-tab>
                  </v-tabs>
                  <div class="post-date">
                    {{ post.date}}
                  </div>
                  <h1>{{ post.title }}</h1>
                  <v-tabs-items v-model="tab">
                    <v-tab-item>
                      <v-card flat color="posttab">
                        <v-card-text>
                          <div v-html="post.text"></div>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card flat>
                        <v-card-text>
                          <FotoGallery />
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </div>
              </div>
              <iframe width="100%" height="800" :src="post.mapLink" style="border:none; padding: 0 20px 0 20px; margin: 0 0 0 0;" v-if="tabid==1"></iframe>
            </v-col>
          </v-row>
        </v-card>
      </v-responsive>
    </div>
  </v-layout>
</template>

<script>
import FotoGallery from '@/components/posts/PostFotoGallery'
export default {
  asyncData (context) {
    return {
      post: {
        id: '1',
        title: 'Weissenstein (SO) - ID: ' + context.route.params.id,
        text: '<p>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\n' +
          '<p>Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\n' +
          '<p>Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\n' +
          '<p>Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        date: '12. Oktober 2018',
        image: '/touren/img/header_weissenstein.jpg',
        mapLink: 'https://map.schweizmobil.ch/?lang=de&photos=yes&logo=yes&season=summer&resolution=1.58&E=2694236&N=1111725&bgLayer=pk&trackId=4657783'
      }
    }
  },
  data () {
    return {
      tabid: null,
      window: {
        width: 0,
        height: 0
      },
      tab: null,
      items: [
        { tab: 'Beschreibung', tabnum: 1 },
        { tab: 'Fotos', tabnum: 2 }
      ]
    }
  },
  components: {
    FotoGallery
  },
  beforeMount () {
    addEventListener('resize', this.handleResize)
    this.handleResize()
    this.tabid = 1
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
  .post-container {
    padding: 110px 10px 40px 10px;
  }
  .post-card {
    overflow: hidden;
    /* margin-bottom: 40px; */
    padding-bottom: 0px
  }
  .post-content {
    padding: 0 60px 0 40px;
  }
  .post-content h1 {
    font-size: 20px;
    font-weight: 500;
    margin: 12px 0 8px 0;
    padding: 0 0 0 0;
  }
  .post-content p {
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 0 0;
    padding: 0 0 12px 0;
  }
  .post-content .v-tab {
    color: #9ccc65;
  }
  .post-date {
    font-size: 12px;
    margin: 20px 0 0 0;
  }
  .posttab--text {
    color: #999999 !important;
  }
  .post-image {
    padding-top: 0;
  }
  .v-card .v-card__text {
   padding-left: 0 !important;
  }
</style>
