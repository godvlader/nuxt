<template>
  <!-- task item  -->
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">{{ task.content }}</div>
    <div class="buttons">
      <button @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</button>
      <button class="delete" @click="removeTask">Delete</button>
    </div>
  </div>
</template>


<script>
  export default {
    props: ['task'],
    methods: {
      toggleDone() {
        this.$store.commit('TOGGLE_TASK', this.task);
      },
      removeTask() {
        this.$store.commit('REMOVE_TASK', this.task);
      },
      //   async toggleDone() {
      //     //async un appel en db ou api
      //     await this.simulateAsyncOperation();

      //     //apres que le check ca soit fini, delete
      //     this.$store.commit('TOGGLE_TASK', this.task);
      //   },
      //   simulateAsyncOperation() {
      //     return new Promise(resolve => {
      //       setTimeout(() => {
      //         //le temps que ca prends pour l'operation
      //         resolve();
      //       }, 1000);
      //     });
      //   }

    }
  }

</script>

<style scoped>
  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding: 15px;
    background-color: var(--task-bg-color);
    color: var(--text-color);
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, color 0.3s;
  }

  .task .content {
    flex-grow: 1;
    margin-right: 10px;
  }

  .task.is-complete .content {
    text-decoration: line-through;
    color: var(--done-text-color);
  }

  .buttons button {
    padding: 5px 10px;
    margin-left: 5px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }

  .buttons button:hover {
    transform: translateY(-2px);
  }

  .delete {
    background-color: var(--delete-bg-color);
    color: var(--button-text-color);
  }

  .delete:hover {
    background-color: var(--delete-hover-bg-color);
  }

  .is-complete {
    background-color: #0b5e0b;
    /* Light green background for completed tasks */
  }

</style>
