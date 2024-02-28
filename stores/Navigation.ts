export const useNavigation = defineStore("navigation", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
