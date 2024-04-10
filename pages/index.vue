<template>

  <main>
    <h1>Task Board</h1>
    <div class="theme-toggle" @click="toggleTheme">
      <span v-if="$store.state.theme === 'light'">🌞</span>
      <span v-else>🌜</span>
    </div>
    <p>Crée une liste de tâches</p>

    <div class="create-new">
      <input type="text" v-model="newTask" placeholder="Ajoute un nouveau task" @keypress.enter="addTask">
      <button @click="addTask">Add</button>
    </div>

    <div class="tasks">
      <transition-group name="task-list" tag="div" class="task-container">
        <Task v-for="(task, i) in $store.state.tasks" :key="'task-' + i" :task="task" /> 
        <!-- prefix the key for unicity -->
      </transition-group>
    </div>

  </main>
</template>

<script>
  export default {
    data() {
      return {
        newTask: ''
      }
    },
    methods: {
      addTask() {
        if (this.newTask) {
          this.$store.commit('ADD_TASK', this.newTask);
          this.newTask = '';
        }
      },
      toggleTheme() {
        const newTheme = this.$store.state.theme === 'light' ? 'dark' : 'light';
        this.$store.commit('toggleTheme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme); //apply to <html>
      }
    }
  }

</script>

<!-- limits the CSS rules to only apply to elements within that component -->
<style scoped>
  .task-list-enter-active,
  .task-list-leave-active {
    transition: opacity 0.5s;
  }

  .task-list-enter,
  .task-list-leave-to {
    opacity: 0;
  }

</style>
