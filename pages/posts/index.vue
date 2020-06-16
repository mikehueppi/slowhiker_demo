<template>
  <v-layout align-center justify-center>
    <div class="page" id="postList">
      <v-responsive class="mx-auto post-container">
        <Teaser
          v-for="post in posts"
          :id="post.id"
          :key="post.id"
          :post="post"
          class="teaser" />
        <v-footer><span>&copy; {{ new Date().getFullYear() }}</span></v-footer>
      </v-responsive>
    </div>
  </v-layout>
</template>

<script>
import Teaser from '@/components/posts/PostListTeaser'
export default {
  name: 'index.vue',
  components: {
    Teaser
  },
  computed: {
    posts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
  .post-container {
    padding: 110px 10px 0 10px;
  }
</style>
