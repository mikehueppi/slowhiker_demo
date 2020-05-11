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
  data: () => ({
      // todo: --> Foto-Links aus DB...
    images: [
      '/touren/img/weissenstein_1.jpg',
      '/touren/img/weissenstein_2.jpg',
      '/touren/img/weissenstein_3.jpg',
      '/touren/img/weissenstein_4.jpg',
      '/touren/img/weissenstein_5.jpg',
      '/touren/img/weissenstein_6.jpg',
      '/touren/img/weissenstein_7.jpg',
      '/touren/img/weissenstein_8.jpg',
      '/touren/img/weissenstein_9.jpg',
      '/touren/img/weissenstein_10.jpg',
      '/touren/img/weissenstein_11.jpg',
      '/touren/img/weissenstein_12.jpg',
      '/touren/img/weissenstein_13.jpg',
      '/touren/img/weissenstein_14.jpg',
      '/touren/img/weissenstein_15.jpg',
      '/touren/img/weissenstein_16.jpg',
      '/touren/img/weissenstein_17.jpg',
      '/touren/img/weissenstein_18.jpg',
      '/touren/img/weissenstein_19.jpg',
      '/touren/img/weissenstein_20.jpg',
      '/touren/img/weissenstein_21.jpg',
      '/touren/img/weissenstein_22.jpg'
    ],
    index: null
  }),
  components: {
    gallery: VueGallery
  }
}
</script>

<style scoped>
  .post-content p {
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 0 0;
    padding: 0 0 12px 0;
  }
  .v-card--flat .row {
    background-color: #efefef;
    padding: 10px;
    margin: 0;
  }
</style>
