import AbstractView from "./article/core/abstractView";

export default class extends AbstractView {
    constructor() {
        super();
        document.title = '404: This page could not be found';
    }

    template():string {
        let articleHtml = `
            <h1 class="not-found-page__title">404</h1>
            <div class="not-found-page__description">This page could not be found</div>
        `;

        return `
            <main class="not-found-page">
              ${articleHtml}
            </main>`;
    }
}