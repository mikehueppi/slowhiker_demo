<template>
  <nuxt-link :to="postLink">
    <v-card
      :id="id"
      :class="teaserClass"
    >
      <v-img
        :src="imageTeaser"
        :max-width="imageTeaserWidth"
        class="teaser-image"
      />
      <div class="teaser-content">
        <div class="teaser-date"><Date :date="post.date" /></div>
        <h1>{{ post.title }}</h1>
        <div class="teaser-text">{{ post.teaser }}</div>
        <div class="teaser-icons" v-if="$vuetify.breakpoint.mdAndUp">
          <div class="teaser-icon"><v-icon>transfer_within_a_station</v-icon>{{ post.distance }}</div>
          <div class="teaser-icon"><v-icon>schedule</v-icon>{{ post.duration }}</div>
          <div class="teaser-icon"><v-icon>terrain</v-icon>{{ post.maxHeight }}</div>
          <div class="teaser-icon"><v-icon>place</v-icon>{{ post.region }}</div>
        </div>
      </div>
      <div class="teaser-action" v-if="$vuetify.breakpoint.mdAndUp">
        <v-icon medium>arrow_forward_ios</v-icon>
      </div>
    </v-card>
  </nuxt-link>
</template>

<script>
import Date from '@/components/UI/AppDate'
export default {
  name: 'PostListTeaser.vue',
  props: {
    id: {
      type: String,
      required: true
    },
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    Date
  },
  computed: {
    imageTeaser () {
      return (this.post.image > '') ? '/touren/img/teaser_' + this.post.image + '.jpg' : '/touren/img/teaser_empty.png'
    },
    postLink () {
      return 'posts/' + this.id
    },
    teaserClass () {
      return (this.$vuetify.breakpoint.mdAndUp) ? 'teaser' : 'teaser wrapped'
    },
    imageTeaserWidth () {
      return (this.$vuetify.breakpoint.mdAndUp) ? '240' : '100%'
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/styles/colors.scss';
  .teaser {
    margin: 0 0 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
  }
  a.teaser {
    text-decoration: none !important;
  }
  .teaser h1 {
    font-size: 18px;
    font-weight: 400;
    margin: 12px 0 0 0;
    padding: 0 0 0 0;
    color: $lime;

  }
  .teaser-content {
    width: 100%;
    flex-basis:  auto;
    padding: 20px;
  }
  .teaser-image {
    margin: 0 0 0 0;
    flex-basis:  auto;
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
  .teaser-icons {
    display: table;
    font-size: 14px;
    margin: 12px 0 0 0;
    padding: 0 0 0 0;
  }
  .teaser-action {
    background-color: $pistache;
    max-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    width: 48px;
    margin: 10px 12px 10px 0;
    flex-basis:  auto;
  }
  .teaser-action .v-icon {
    align-self: center;
    color: $blue;
  }
  .teaser-icon {
    float: left;
    margin: 0 20px 8px 0;
    min-width: 120px;
  }
  .teaser-icon .v-icon {
    padding: 0 8px 0 0;
  }
  .wrapped {
    flex-wrap: wrap;
  }
</style>
