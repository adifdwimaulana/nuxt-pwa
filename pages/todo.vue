<template>
  <v-row>
    <v-col cols="12">
      <h1 class="text-center">Todo List</h1>

      <input
        v-model="inputtedText"
        type="text"
        style="border: 1px solid black"
      />
      <button @click="addTodo">Add Todo</button>

      <v-list-item>
        <v-list-item-content v-for="(todo, idx) in todos" :key="idx">
          <v-list-item-title>{{ todo.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TodoPage',
  layout: 'blank',
  data() {
    return {
      inputtedText: '',
    }
  },
  computed: {
    todos() {
      return this.$store.state.todo.list
    },
  },
  methods: {
    addTodo() {
      this.$store.dispatch('todo/addTodo', this.inputtedText)
    },
  },
}
</script>
