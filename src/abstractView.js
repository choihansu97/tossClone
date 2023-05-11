import './components/header/header';
import './components/footer/footer'

export default class AbstractView {
  setTitle(title) {
    document.title = title;
  }

  async setup() {
  }

  template() {
    return "";
  }

  async render(target) {
    if (target) {
      target.innerHTML = `
        <app-header></app-header>
        ${this.template()}
        <app-footer></app-footer>
      `
    }
  }
}