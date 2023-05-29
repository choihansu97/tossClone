export default class AbstractView {
    setTitle(title: string) {
        document.title = title;
    }

    async setup():Promise<any> {
    }

    template(setup : any):string{
        return ''
    }

    mounted() {}

    async render(target: HTMLElement) {
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