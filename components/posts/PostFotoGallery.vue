<template>
  <v-container fluid>
    <div>
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <v-row>
        <v-col
          v-for="(img, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          class="d-flex child-flex"
          cols="3"
        >
          <v-card flat tile class="d-flex">
            <v-img
              :src="img"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import VueGallery from 'vue-gallery'
export default {
  name: 'PostFotoGallery',
  components: {
    gallery: VueGallery
  },
  data: () => ({
    index: null
  }),
  props: {
    image: {
      type: String,
      required: true
    },
    numberOfImages: {
      type: Number,
      required: true
    }
  },
  computed: {
    images () {
      const images = []
      let n = 0
      while (n < this.numberOfImages) {
        images[n] = '/touren/img/' + this.image + '_' + (n + 1) + '.jpg'
        n++
      }
      return images
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/styles/colors.scss';
  .post-content p {
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 0 0;
    padding: 0 0 12px 0;
  }
  .v-card--flat .row {
    background-color: $white;
    padding: 10px;
    margin: 0;
  }
</style>
