<template>
  <div>
    <v-skeleton-loader
      v-if="isLoading"
      class="mx-auto"
      max-width="300"
      type="card, actions"
    />

    <v-card v-else class="mx-auto" max-width="300" max-height="322.5">
      <v-img
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="deep-purple lighten-2" text> Reserve </v-btn>
        <v-btn color="deep-purple lighten-2" text> Reserve </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SkeletonPage',
  data() {
    return {
      theme: {
        isDark: true,
      },
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.todo.isLoading
    },
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$store.dispatch('todo/fetchData')
    },
  },
}
</script>
