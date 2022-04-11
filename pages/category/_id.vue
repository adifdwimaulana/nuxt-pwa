<template>
  <div>
    <NewsList />
    <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'CategoryDetail',
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>
