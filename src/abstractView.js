export default class AbstractView {
    setTitle(title) {
        document.title = title;
    }

    async setup() {
    }

    template() { return "" }

    async render(target) {
        const setupData = await this.setup();

        const main = document.createElement('main');
        main.innerHTML = this.template(setupData);
        target.innerHTML = '';
        target.appendChild(main);
    }
}