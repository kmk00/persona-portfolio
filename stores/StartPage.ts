export const useStartPage = defineStore("startPage", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
