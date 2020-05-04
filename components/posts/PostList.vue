<template>
  <div>
    <Teaser
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :teaser="post.teaser"
      :date="post.date"
      :thumbnail="post.thumbnail"
      class="teaser" />
  </div>
</template>

<script>
import Teaser from '@/components/posts/PostListTeaser'
export default {
  name: 'PostList.vue',
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  components: {
    Teaser
  }
}
</script>
