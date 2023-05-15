export default class AbstractView {
  setTitle(title) {
    document.title = title;
  }

  async setup() {}

  template() {
    return "";
  }

  async render(target) {
    if (target) {
      target.innerHTML = `
        ${this.template()}
      `;
    }
  }
}
