//state initial du store
export const state = () => ({
  theme: "light", //theme par defaut
  tasks: [
    {
      content: "Get bob",
      done: false,
    },
    {
      content: "Wash the car",
      done: false,
    },
  ], //liste par defaut
});

//utilisées pour modifier le state du store
export const mutations = {
  //ajouter new task
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks]; //ajoute les autres et le new task reste en haut
    //state.tasks.push({content:task, done:false})
  },
  //effacer
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  //task complete
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
  },
  toggleTheme(state) {
    state.theme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", state.theme);
    document.documentElement.setAttribute("data-theme", state.theme);
  },
};

//actions pour async ou commite mutation
export const actions = {
  initializeStore({ commit }) {
    const savedTheme = localStorage.getItem("theme") || "light"; // optional: load saved theme
    commit("toggleTheme", savedTheme);
  },
};
