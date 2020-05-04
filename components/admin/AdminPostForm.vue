<template>
  <section class="admin-new-post post-form">
    <div class="new-post-edit" v-if="editNew===1">
      <v-form
        ref="postForm"
      >
        <h2>Neue Tour</h2>
        <v-row>
          <p>ID: 7</p>
        </v-row>
        <v-row>
          <v-text-field
            v-model="postData.title"
            name="title"
            :counter="50"
            label="Titel"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-textarea
            v-model="teaser"
            name="teaser"
            :counter="200"
            label="Teaser"
            value=""
            background-color="grey lighten-4"
            rows=4
          ></v-textarea>
        </v-row>
        <v-row>
          <v-textarea
            v-model="postData.description"
            name="description"
            :counter="200"
            label="Beschreibung"
            value=""
            background-color="grey lighten-4"
            rows=4
          ></v-textarea>
        </v-row>
        <v-row>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="postData.date"
                label="Datum"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="postData.date" @input="menu = false"></v-date-picker>
          </v-menu>
        </v-row>
        <v-row>
          <v-select
            :items="regions"
            label="Region"
          ></v-select>
        </v-row>
        <v-row>
          <v-text-field
            v-model="mapLink"
            name="mapLink"
            :counter="100"
            label="Link SchweizMobil"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-btn x-large outlined color="#999999" class="admin-button edit-post" @click="onSubmitted">Tour speichern</v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn x-large outlined color="#999999" class="admin-button edit-post" @click="editNew=0">abbrechen</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <div class="new-post-init" v-else>
      <v-btn x-large outlined color="#999999" class="admin-button new-post" @click="editNew=1">Neue Tour erstellen</v-btn>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminEditPost',
  data: () => ({
    editNew: null,
    postData: {
      title: '',
      description: '',
      date: ''
    },
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    regions: ['Genferseeregion (GE, VD, VS)', 'Mittelland (BE, SO, FR, NE, JU)', 'Nordwestschweiz (BS, BL, AG)', 'Ostschweiz (SG, TG, AI, AR, GL, SH, GR)', 'Tessin (TI)', 'Zentralschweiz (UR, SZ, OW, NW, LU, ZG)', 'Zürich (ZH)']
  }),
  methods: {
    onSubmitted () {
      // const text =
      // const message = text.concat(this.postData.title)
      // alert('Tour gespeichert! - ' + this.postData.title + ' / ' + this.postData.date)
      axios.post('https://slowhiker-9a886.firebaseio.com/posts.json', this.postData)
        .then(result => console.log(result))
        .catch(e => console.log(e))
    }
  },
  mounted () {
    this.editNew = 0
  }
}
</script>

<style scoped>
  .post-form {
    padding: 12px;
  }
  .post-form form {
    width: 100%
  }
  .post-form .label {
    left: 4px;
    top: 4px;
  }
  .post-form h2 {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    padding: 0 0 8px 0;
  }
  .post-form p {
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 0 0;
    padding: 0 0 12px 0;
  }
  .post-form .row {
    padding-left: 12px !important;
  }
  .admin-new-post {
    min-width: 800px;
    padding: 0 80px 0 0;
    /* padding: 0 20px 0 0; */
  }
  .admin-button {
    margin: 20px 0 0 0;
  }
  .admin-button.new-post {
    width: 400px;
  }
  .admin-button.edit-post {
    position: relative;
    width: 100%;
  }
</style>
