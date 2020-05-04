<template>
  <div>
    <v-list-item two-line class="list-item">
      <div class="list-icon">
        <v-icon medium v-if="listType == 'edit'">edit</v-icon>
        <img src="/img/marker.png" v-else />
      </div>
      <v-list-item-content>
        <v-list-item-title>Monte Camino - Intragna (TI)</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <div class="list-icon">
        <v-icon medium v-if="listType == 'edit'">edit</v-icon>
        <img src="/img/marker.png" v-else />
      </div>
      <v-list-item-content>
        <v-list-item-title>Loco - Intragna (TI)</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <div class="list-icon">
        <v-icon medium v-if="listType == 'edit'">edit</v-icon>
        <img src="/img/marker.png" v-else />
      </div>
      <v-list-item-content>
        <v-list-item-title>Baden / Tüfelscheller (AG)</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <div class="list-icon">
        <v-icon medium v-if="listType == 'edit'">edit</v-icon>
        <img src="/img/marker.png" v-else />
      </div>
      <v-list-item-content>
        <v-list-item-title>Pfynnwald (VS)</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item two-line>
      <div class="list-icon">
        <v-icon medium v-if="listType == 'edit'">edit</v-icon>
        <img src="/img/marker.png" v-else />
      </div>
      <v-list-item-content>
        <v-list-item-title>Brugg / Wasserschloss (AG)</v-list-item-title>
        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: 'PostShortlist.vue',
  props: ['listType']
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
</style>
