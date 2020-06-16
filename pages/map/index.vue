<template>
    <GmapMap
      ref="gmap"
      :center="center"
      :zoom="8"
      style="height: 100%"
    >
      <GmapMarker
        v-for="(marker,i) in markers"
        :key="i"
        :position="marker.position"
        :icon="marker.icon"
        :title="marker.title"
        @click="openMapTeaser(marker.id)"
      />
      <v-dialog
        v-model="dialog"
        max-width="360"
      >
        <MapTeaser
          :id="postData.id"
          :title="postData.title"
          :teaser="postData.teaser"
          :date="postData.date"
          :image="postData.image"
          :distance="postData.distance"
          :duration="postData.duration"
          :maxHeight="postData.maxHeight"
          :region="postData.region"
          @closeDialog="closeDialog"
        />
      </v-dialog>
<!--<v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">{{ currentTourTitle }}</v-card-title>
          <v-card-text>
            {{ currentTourTeaser }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <nuxt-link :to="currentTourLink">
              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
              >
                zur Tour
              </v-btn>
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-dialog>
      -->
    </GmapMap>
</template>

<script>
import MapTeaser from '@/components/posts/PostMapTeaser'
export default {
  name: 'index.vue',
  components: {
    MapTeaser
    // MapLoader,
    // MapMarker
  },
  data () {
    return {
      center: { lat: 47.050545, lng: 8.305468 },
      map: null,
      dialog: false,
      postData: {}
    }
  },
  mounted () {
    this.$refs.gmap.$mapPromise.then((map) => {
      this.map = map
    })
  },
  computed: {
    posts () {
      return this.$store.getters.loadedPosts
    },
    markers () {
      const arrayMarkers = []
      for (const i in this.posts) {
        if (this.posts[i].coords.latitude > '' && this.posts[i].coords.longitude > '') {
          const marker = {}
          marker.position = { lat: Number(this.posts[i].coords.latitude), lng: Number(this.posts[i].coords.longitude) }
          marker.icon = '/img/marker_medium.png'
          marker.id = this.posts[i].id
          arrayMarkers.push(marker)
        }
      }
      return arrayMarkers
    }
  },
  methods: {
    openMapTeaser (id) {
      const postDataArray = this.posts.filter(post => post.id === id)
      this.postData = postDataArray[0]
      this.dialog = true
    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>
