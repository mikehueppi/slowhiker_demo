<template>
  <v-card
    :id="1"
    class="teaser"
  >
    <v-row>
      <v-col cols="12" sm="3" class="about-img">
        <v-img
          :src="thumbnail"
          max-width="240"
          height="180"
          class="teaser-image"
        />
      </v-col>
      <v-col cols="12" sm="8" class="teaser-content">
        <div class="teaser-date">{{ date }}</div>
        <h1>{{ title }}</h1>
        <div class="teaser-text">{{ teaser }}</div>
      </v-col>
      <v-col cols="12" sm="1">
        <nuxt-link to="/posts/1">
          <div class="teaser-action">
            <v-icon medium>arrow_forward_ios</v-icon>
          </div>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'PostListTeaser.vue',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    teaser: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .teaser {
    padding: 0 10px 0 10px;
    margin: 0 0 20px 0;
  }
  .teaser div {
    padding:  0 !important;
    align-items: flex-start !important;
  }
  .teaser h1 {
    font-size: 18px;
    font-weight: 500;
    margin: 12px 0 0 0;
    padding: 0 0 0 0;
  }
  .teaser-content {
    width: 100%;
  }
  .teaser-image {
    margin: 0 20px 0 0;
  }
  .teaser-date {
    font-size: 12px;
    margin: 20px 0 0 0;
  }
  .teaser-text {
    font-size: 14px;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }
  .teaser-action {
    background-color: #bfde9b; /* #9ccc65; */
    max-width: 50px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    width: 48px;
    margin: 10px 12px 10px 0;
  }
  .teaser-action .v-icon {
    align-self: center;
    color: #0d47a1; /* #fafafa; */
  }
</style>
