export default class AbstractView {
  setTitle(title) {
    document.title = title;
  }

  async setup() {}

  template() {
    return "";
  }

  async render(target) {
    const setupData = await this.setup();

    const main = document.createElement('main');
    main.innerHTML = this.template(setupData);

    if (target.firstChild) {
      target.replaceChild(main, target.firstChild);
    } else {
      target.appendChild(main);
    }
  }
}