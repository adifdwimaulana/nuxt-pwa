<template>
  <default-layout>
    <v-row>
      <v-col class="text-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
        <blockquote class="blockquote">
          &#8220;Welcome to Detail Page&#8221;
        </blockquote>

        <NuxtLink to="/detail/child1">Child 1</NuxtLink>
        <NuxtLink to="/detail/child2">Child 2</NuxtLink>
        <Nuxt />
      </v-col>
    </v-row>
  </default-layout>
</template>

<script>
import DefaultLayout from './default.vue'

export default {
  name: 'CustomLayout',
  components: { DefaultLayout },
}
</script>
