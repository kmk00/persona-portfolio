export const useStartPage = defineStore("startPage", {
  state: () => ({
    isOpen: true,
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
