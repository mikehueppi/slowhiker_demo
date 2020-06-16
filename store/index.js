import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      globalSettings: {
        regions: ['Genferseeregion/Wallis', 'Mittelland', 'Nordwestschweiz', 'Ostschweiz', 'Tessin', 'Zentralschweiz', 'Zürich']
      }
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      },
      addPost (state, post) {
        state.loadedPosts.push(post)
      },
      editPost (state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return axios.get('https://slowhiker-9a886.firebaseio.com/posts.json')
          .then((res) => {
            const postsArray = []
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e))
      },
      addPost (vuexContext, post) {
        axios.post('https://slowhiker-9a886.firebaseio.com/posts.json', post)
          .then((res) => {
            vuexContext.commit('addPost', { ...post, id: res.data.name })
          })
          .catch(e => console.log(e))
      },
      editPost (vuexContext, editedPost) {
        return axios.put('https://slowhiker-9a886.firebaseio.com/posts/' +
          editedPost.id + '.json', editedPost)
          .then((res) => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      },
      regions (state) {
        return state.globalSettings.regions
      }
    }
  })
}
export default createStore
