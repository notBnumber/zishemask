export const modal = {
  methods: {
    modalOpen(name) {
      this[name] = true;
    },
    modalClose(name) {
      this[name] = false;
    }
  }
}