<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="n in 12"
        :key="n"
        class="d-flex child-flex"
        cols="3"
      >
        <v-card flat tile class="d-flex">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
  </v-container>
</template>

<script>
export default {
  name: 'PostFotoGallery'
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
