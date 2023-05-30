export default class AbstractView {
    protected setTitle(title: string) {
        document.title = title;
    }

    protected async setup():Promise<any> {
    }

    protected template(setup : any):string{
        return ''
    }

    protected mounted() {}

    protected async render(target: HTMLElement) {
        const setupData = await this.setup();

        const main:HTMLElement = document.createElement("main");
        main.innerHTML = this.template(setupData);

        if (target.firstChild) {
            target.replaceChild(main, target.firstChild);
        } else {
            target.appendChild(main);
        }

        this.mounted();
    }
}