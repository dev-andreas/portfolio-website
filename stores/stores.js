import { defineStore } from 'pinia';

export const useProjectsStore = defineStore("projects", {
  state: () => {
    return {
      currentProject: -1,
    };
  }
});

export const useNavbarStore = defineStore("navbar", {
  state: () => {
    return {
      showIcon: false,
    };
  }
});
