<template>
  <v-layout align-center justify-center>
    <div class="page" id="post">
      <v-responsive class="mx-auto post-container">
        <v-card class="post-card" color="posttab">
          <v-row>
            <v-col cols="12" md="12" class="post-image">
              <v-img
                id="postImage"
                :src="imageHeader"
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
                    <Date :date="post.date" />
                  </div>
                  <h1>{{ post.title }}</h1>
                  <v-tabs-items v-model="tab">
                    <v-tab-item>
                      <v-card flat color="posttab">
                        <v-card-text>
                          <div class="post-description">{{ post.description }}</div>
                          <v-simple-table class="post-table">
                            <template v-slot:default>
                              <tbody>
                              <tr>
                                <td><v-icon>transfer_within_a_station</v-icon>Länge: </td>
                                <td>{{ post.distance }}</td>
                              </tr>
                              <tr>
                                <td><v-icon>schedule</v-icon>Dauer: </td>
                                <td>{{ post.duration }}</td>
                              </tr>
                              <tr>
                                <td><v-icon>terrain</v-icon>Höchster Punkt: </td>
                                <td>{{ post.maxHeight }}</td>
                              </tr>
                              <tr>
                                <td><v-icon>place</v-icon>Region: </td>
                                <td>{{ post.region }}</td>
                              </tr>
                              <tr>
                                <td><v-icon>trip_origin</v-icon>Ausgangspunkt: </td>
                                <td>{{ post.departure }} </td>
                              </tr>
                              <tr>
                                <td><v-icon>local_offer</v-icon>Tags: </td>
                                <td class="tags">
                                  <div v-if="post.tags.length > 0">
                                    <v-chip
                                      small
                                      v-for="tag of post.tags"
                                      :key="tag"
                                      class="ma-2"
                                    >
                                      {{ tag }}
                                    </v-chip>
                                  </div>
                                </td>
                              </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-card flat>
                        <v-card-text>
                          <FotoGallery :numberOfImages="post.numberOfImages" :image="post.image" />
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </div>
              </div>
              <iframe width="100%" height="800" :src="post.mapLink" style="border:none; padding: 0 20px 0 20px; margin: 0 0 0 0;" v-if="tabid==1"></iframe>
              <div class="post-map-link" v-if="tabid==1"><a :href="post.mapLink" target="_blank">Grössere Kartenansicht</a></div>
            </v-col>
          </v-row>
        </v-card>
      </v-responsive>
    </div>
  </v-layout>
</template>

<script>
import axios from 'axios'
import FotoGallery from '@/components/posts/PostFotoGallery'
import Date from '@/components/UI/AppDate'
export default {
  asyncData (context) {
    return axios.get('x.firebaseio.com/posts/' + context.params.id + '.json')
      .then((res) => {
        return {
          post: res.data
        }
      })
      .catch(e => context.error(e))
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
    FotoGallery,
    Date
  },
  computed: {
    imageHeader () {
      return (this.post.image > '') ? '/touren/img/header_' + this.post.image + '.jpg' : '/touren/img/header_weissenstein.jpg'
    }
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

<style scoped lang="scss">
  @import '../../assets/styles/colors.scss';
  .post-container {
    padding: 110px 10px 40px 10px;
  }
  .post-card {
    overflow: hidden;
    padding-bottom: 0px
  }
  .post-content {
    padding: 0 60px 0 40px;
  }
  .post-content h1 {
    font-size: 24px;
    font-weight: 400;
    margin: 12px 0 0 0;
    padding: 0 0 0 0;
    color: $lime;
  }
  .post-content p {
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 0 0;
    padding: 0 0 12px 0;
  }
  .post-content .v-tab {
    color: $dark-grey;
  }
  .post-content .v-tab--active {
    background-color: $light-grey;
  }
  .post-table {
    max-width: 600px;
  }
  .post-content table tr td {
    color: $dark-grey;
  }
  .post-content table tr td.tags {
    padding-left: 4px;
  }
  .post-description {
    white-space: pre-wrap;
    margin-bottom: 20px;
  }
  .post-date {
    font-size: 12px;
    margin: 20px 0 0 0;
  }
  .posttab--text {
    color: $dark-grey !important;
  }
  .post-image {
    padding-top: 0;
  }
  .post-map-link {
    padding: 8px 0 0 20px;
  }
  .v-card .v-card__text {
   padding-left: 0 !important;
  }
  .v-icon {
    padding: 0 20px 0 0;
  }
</style>
