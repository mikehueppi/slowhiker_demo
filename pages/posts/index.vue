<template>
  <v-layout align-center justify-center>
    <div class="page" id="postList">
      <v-responsive class="mx-auto post-container">
        <PostList :posts="posts"  />
        <v-footer><span>&copy; {{ new Date().getFullYear() }}</span></v-footer>
      </v-responsive>
    </div>
  </v-layout>
</template>

<script>
import PostList from '@/components/posts/PostList'
export default {
  name: 'index.vue',
  components: {
    PostList
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
