<template>
  <v-card
    :id="id"
    class="teaser"
  >
    <v-img
      :src="imageTeaser"
      max-width="360"
      height="240"
      class="teaser-image"
    />
    <div class="teaser-date"><Date :date="date" /></div>
    <h1>{{ title }}</h1>
    <div class="teaser-text">{{ teaser }}</div>
    <div class="teaser-icons">
      <div class="teaser-icon"><v-icon>transfer_within_a_station</v-icon>{{ distance }}</div>
      <div class="teaser-icon"><v-icon>schedule</v-icon>{{ duration }}</div>
      <div class="teaser-icon"><v-icon>terrain</v-icon>{{ maxHeight }}</div>
      <div class="teaser-icon"><v-icon>place</v-icon>{{ region }}</div>
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <nuxt-link :to="postLink">
        <v-btn
          color="green darken-1"
          text
          @click="closeDialog"
        >
          zur Tour
        </v-btn>
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostMapTeaser.vue',
  data () {
    return {
      // dialog: false
    }
  },
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
    image: {
      type: String,
      required: true
    },
    distance: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    maxHeight: {
      type: String,
      required: true
    },
    region: {
      type: String,
      required: true
    }
  },
  computed: {
    imageTeaser () {
      return (this.image > '') ? '/touren/img/teaser_' + this.image + '.jpg' : '/touren/img/teaser_empty.png'
    },
    postLink () {
      return 'posts/' + this.id
    }
  },
  methods: {
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped>
  .teaser {
    padding: 4px;
  }
  .teaser h1 {
    font-size: 18px;
    font-weight: 500;
    margin: 12px  8px 0 8px;
    padding: 0 0 0 0;
  }
  .teaser-image {
    margin: 0;
  }
  .teaser-date {
    font-size: 12px;
    margin: 20px 8px 0 8px;
  }
  .teaser-text {
    font-size: 14px;
    margin: 0 8px 0 8px;
    padding: 0 0 0 0;
  }
  .teaser-icons {
    display: table;
    font-size: 14px;
    margin: 12px 8px 0 8px;
    padding: 0 0 0 0;
  }
  .teaser-icon {
    margin: 0 20px 8px 0;
    min-width: 120px;
  }
  .teaser-icon .v-icon {
    padding: 0 8px 0 0;
  }

</style>
