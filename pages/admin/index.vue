<template>
  <v-layout align-center justify-center>
    <div class="page" id="admin">
      <v-responsive class="mx-auto admin-container">
        <v-card
        >
          <div class="admin">
            <h1>Admin</h1>
            <v-row no-gutters>
              <v-col cols="12" md="8">
                <PostForm v-if="postFormType === 'create'" :postData="postData" :postFormType="postFormType" @resetPost="resetPost" />
                <PostForm v-else :postData="postDataSelected" :postFormType="postFormType" @resetPost="resetPost" />
              </v-col>
              <v-col cols="12" md="4">
                <section class="admin-existing-posts">
                  <h2>Touren bearbeiten</h2>
                  <PostEditList :posts="posts" :postFormType="postFormType" @selectedPost="selectedPost" />
                </section>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-responsive>
    </div>
  </v-layout>
</template>

<script>
import PostEditList from '@/components/posts/PostEditList'
import PostForm from '@/components/admin/AdminPostForm'
export default {
  name: 'index.vue',
  data () {
    return {
      postFormType: 'create',
      postData: {
        title: '',
        teaser: '',
        description: '',
        date: '',
        region: '',
        image: '',
        mapLink: '',
        tags: [],
        coords: {
          longitude: '',
          latitude: ''
        },
        author: '',
        departure: '',
        distance: '',
        duration: '',
        maxHeight: '',
        active: true,
        createDate: new Date(),
        numberOfImages: null
      },
      posts: this.$store.getters.loadedPosts,
      postDataSelected: {}
    }
  },
  components: {
    PostEditList,
    PostForm
  },
  methods: {
    selectedPost (obj) {
      this.postDataSelected = obj
      this.postFormType = 'update'
    },
    resetPost () {
      this.postFormType = 'create'
    }
  }
}
</script>

<style scoped>
  .admin {
    padding: 40px 60px 40px 40px;
  }
  .admin h1 {
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 8px 0;
    padding: 0 0 20px 0;
  }
  .admin h2 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    padding: 0 0 8px 12px;
  }
  .admin p {
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 0 0;
    padding: 0 0 12px 0;
  }
  .admin-container {
    padding: 110px 10px 0 10px;
  }
  .admin-existing-posts {
    padding: 30px 0 0 60px;
  }
</style>
