<template>
  <div v-if="postFormType === 'create'">
    <v-list-item
      two-line
      v-for="post in posts"
      :key="post.id">
      <div class="list-icon">
        <v-icon medium @click="selectPost(post)">edit</v-icon>
      </div>
      <v-list-item-content>
        <v-list-item-title>{{ post.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ post.date }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
  <div v-else>
    <v-list-item
      two-line
      v-for="post in posts"
      :key="post.id">
      <div class="list-icon">
        <v-icon medium @click="selectPost(post)" v-if="post.id != selectedPostID">edit</v-icon>
        <v-icon color="#9ccc65" medium v-else>edit</v-icon>
      </div>
      <v-list-item-content>
        <v-list-item-title :class="post.id === selectedPostID ? 'selected' : ''">{{ post.title }}</v-list-item-title>
        <v-list-item-subtitle :class="post.id === selectedPostID ? 'selected' : ''">{{ post.date }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: 'PostEditList.vue',
  data: () => ({
    selectedPostID: null
  }),
  props: {
    posts: {
      type: Array,
      required: true
    },
    postFormType: {
      type: String,
      required: true
    }
  },
  methods: {
    selectPost (obj) {
      this.selectedPostID = obj.id
      this.$emit('selectedPost', obj)
    }
  }
}
</script>

<style scoped>
  .list-icon {
    padding: 0 6px 0 0;
  }
  .v-list-item:first-child {
    padding-top: 0px;
  }
  .v-list-item:last-child {
    padding-bottom: 20px;
  }
  .selected {
    color: #9ccc65 !important;
  }
</style>
