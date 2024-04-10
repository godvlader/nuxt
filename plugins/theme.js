export default ({ store }) => {
  window.onNuxtReady(() => {
    store.dispatch("initializeStore");
  });
};
