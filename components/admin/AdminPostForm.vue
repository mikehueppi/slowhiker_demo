<template>
  <section class="admin-new-post post-form">
    <div v-if="postSaved===true && postFormType!=='update'" class="new-post-saved">Tour wurde erfolgreich gespeichert</div>
    <div v-if="editNew===1 || postFormType==='update'" class="new-post-edit">
      <v-form
        ref="postForm"
      >
        <v-toolbar flat v-if="postFormType==='update'" >
          <v-toolbar-title>{{ postData.title }} (ID: {{ postData.id }})</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-cancel</v-icon>
          </v-btn>
        </v-toolbar>
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
            v-model="postData.teaser"
            name="teaser"
            :counter="300"
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
            :counter="1000"
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
            v-model="postData.region"
            :items="regions"
            label="Region"
          ></v-select>
        </v-row>
        <v-row>
          <v-text-field
            v-model="postData.image"
            name="image"
            :counter="100"
            label="Bild-Name"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <p>Tags</p>
        </v-row>
        <v-row>
          <div v-if="postData.tags.length > 0">
            <v-chip
              v-for="tag of postData.tags"
              :key="tag"
              class="ma-2"
              close
              @click:close="deleteTag(tag)"
            >
              {{ tag }}
            </v-chip>
          </div>
          <p class="note" v-else>keine Tags</p>
        </v-row>
        <v-row>
          <v-text-field
            v-model="newTag"
            name="tag"
            :counter="100"
            label=""
          ></v-text-field>
          <v-btn class="mx-2" fab dark small color="grey">
            <v-icon dark @click="addTag(newTag)">mdi-plus</v-icon>
          </v-btn>
        </v-row>
        <v-row>
          <v-text-field
            v-model="postData.mapLink"
            name="mapLink"
            :counter="200"
            label="Link SchweizMobil"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="postData.coords.longitude"
            name="longitude"
            :counter="50"
            label="Koordinaten - Longitude"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="postData.coords.latitude"
            name="longitude"
            :counter="50"
            label="Koordinaten - Latitude"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="postData.author"
            name="author"
            :counter="100"
            label="Autor"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="postData.distance"
            name="distance"
            :counter="20"
            label="Distanz"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="postData.duration"
            name="duration"
            :counter="20"
            label="Dauer"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="postData.maxHeight"
            name="maxheight"
            :counter="20"
            label="Maximale Höhe"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            v-model="postData.numberOfImages"
            name="maxheight"
            :counter="20"
            label="Anzahl Fotos"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-switch
            v-model="postData.active"
            label=" aktiv">
          </v-switch>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-btn x-large outlined color="#999999" class="admin-button edit-post" @click="onSubmitted">Tour speichern</v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-btn x-large outlined color="#999999" class="admin-button edit-post" @click="resetPost">abbrechen</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <div class="new-post-init" v-else>
      <v-btn x-large outlined color="#999999" class="admin-button new-post" @click="createNewTrip">Neue Tour erstellen</v-btn>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AdminEditPost',
  data: () => ({
    editNew: null,
    newTag: null,
    postSaved: null,
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    regions: ['Genferseeregion (GE, VD, VS)', 'Mittelland (BE, SO, FR, NE, JU)', 'Nordwestschweiz (BS, BL, AG)', 'Ostschweiz (SG, TG, AI, AR, GL, SH, GR)', 'Tessin (TI)', 'Zentralschweiz (UR, SZ, OW, NW, LU, ZG)', 'Zürich (ZH)']
  }),
  props: {
    postData: {
      type: Object,
      required: true
    },
    postFormType: {
      type: String,
      required: true
    }
  },
  methods: {
    initPostData () {
      this.postData.title = ''
      this.postData.teaser = ''
      this.postData.description = ''
      this.postData.date = ''
      this.postData.region = ''
      this.postData.image = ''
      this.postData.mapLink = ''
      this.postData.tags = []
      this.postData.coords = {
        longitude: '',
        latitude: ''
      }
      this.postData.author = ''
      this.postData.distance = ''
      this.postData.duration = ''
      this.postData.maxHeight = ''
      this.postData.active = true
      this.postData.createDate = new Date()
      this.postData.numberOfImages = null
    },
    onSubmitted () {
      if (this.postFormType === 'create') {
        this.$store.dispatch('addPost', this.postData).then(() => {
          this.editNew = null
          this.postSaved = true
          this.$router.push('/admin')
        })
      } else {
        this.$store.dispatch('editPost', this.postData).then(() => {
          this.editNew = null
          this.postSaved = true
          this.$router.push('/admin')
        })
      }
    },
    createNewTrip () {
      this.editNew = 1
      this.postSaved = false
      this.initPostData()
    },
    deleteTag (tag) {
      const i = this.postData.tags.indexOf(tag)
      this.postData.tags.splice(i, 1)
    },
    addTag (tag) {
      if (this.newTag > '') {
        this.newTag = null
        this.postData.tags.splice(0, 0, tag)
      }
    },
    resetPost () {
      this.editNew = 0
      this.postFormType = 'create'
      this.postSaved = false
      this.$emit('resetPost')
    }
  },
  mounted () {
    if (typeof this.postData.tags === 'undefined') {
      this.postData.tags = []
    }
  },
  beforeUpdate () {
    if (typeof this.postData.tags === 'undefined') {
      this.postData.tags = []
    }
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
  .post-form p.note {
    font-size: 14px;
    font-style: italic;
    color: #999;
  }
  .post-form .row {
    padding-left: 12px !important;
  }
  .post-form form header {
    /* background-color: red !important; */
    padding: 0 !important;
    margin: 0 0 20px 0 !important;
    height: 64px !important;
  }
  .admin-new-post {
    min-width: 800px;
    padding: 0 80px 0 0;
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
