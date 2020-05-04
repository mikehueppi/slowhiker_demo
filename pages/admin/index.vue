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
                <PostForm />
              </v-col>
              <v-col cols="12" md="4">
                <section class="admin-existing-posts">
                  <h2>Touren bearbeiten</h2>
                  <PostShortlist listType="edit" />
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
import PostShortlist from '@/components/posts/PostShortlist'
import PostForm from '@/components/admin/AdminPostForm'
export default {
  name: 'index.vue',
  data () {
    return {
      editNew: null
    }
  },
  components: {
    PostShortlist,
    PostForm
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
    padding: 0 0 8px 0;
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
    padding: 0 0 0 60px;
  }
</style>
