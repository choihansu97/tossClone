export default class AbstractView {
    protected setTitle(title: string) {
        document.title = title;
    }

    protected async setup() {
    }

    protected template() {
        return "";
    }

    protected async render(target: HTMLElement) {
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