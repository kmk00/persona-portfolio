export const useTechnologies = defineStore("technologies", {
  state: () => ({
    technologyName: "",
    technologyIcon: "",
  }),
  actions: {
    setStackName(name: string, icon: string) {
      this.technologyName = name;
      this.technologyIcon = icon;
    },
  },
});
