<template>
  <p>{{ formatDate (date) }}</p>
</template>

<script>
export default {
  name: 'AppDate',
  props: {
    date: {
      type: String,
      required: true
    }
  },
  methods: {
    formatDate (date) {
      const d = new Date(date)
      const year = d.getFullYear()
      const day = d.getDate()
      const months = [
        'Januar',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember'
      ]
      const month = months[d.getMonth()]
      return day + '. ' + month + ' ' + year
    }
  }
}
</script>

<style scoped>
</style>
