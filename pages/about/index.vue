<template>
  <v-layout align-center justify-center>
    <div class="page" id="about">
      <v-responsive class="mx-auto about-container">
        <v-card>
          <v-row no-gutters>
            <v-col cols="12" md="3" class="about-img" :order="orderColImage">
              <v-img
                src="/img/mike.jpg"
                max-width="270"
                max-height="360"
              />
            </v-col>
            <v-col cols="12" md="9" class="about-description" :order="orderColContent">
              <ContentAbout />
            </v-col>
          </v-row>
        </v-card>
      </v-responsive>
    </div>
  </v-layout>
</template>

<script>
import ContentAbout from '@/components/content/ContentAbout'
export default {
  name: 'index.vue',
  components: {
    ContentAbout
  },
  computed: {
    orderColImage () {
      return (this.$vuetify.breakpoint.mdAndUp) ? 'first' : 'last'
    },
    orderColContent () {
      return (this.$vuetify.breakpoint.mdAndUp) ? 'last' : 'first'
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/styles/colors.scss';
  .about-container {
    padding: 110px 10px 40px 10px;
  }
  .about-container h1 {
    color: $lime;
  }
  .about-img {
    padding: 52px 20px 40px 40px;
  }
  .about-description {
    padding: 32px 60px 20px 40px;
  }
</style>
