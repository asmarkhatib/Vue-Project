const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      goals: [],
    };
  },
  methods: {
    addGOals() {
      this.goals.push(this.enteredValue);
    },
    removeGoals(ind) {
      this.goals.splice(ind, 1);
    },
  },
});

app.mount("#user-goals");
