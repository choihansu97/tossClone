import {CreateRouter} from "./router";
import techArticleList from "../../pages/article/techArticleList";
import DesignArticleList from "../../pages/article/designArticleList";
import ArticleView from "../../pages/article/articleView";
import notFoundPage from "../../pages/notFoundPage";

export default class Routes {
    router = new CreateRouter();
    app: HTMLElement;

    constructor(app: HTMLElement) {
        this.app = app;
        this.setupRoutes();
    }

    components = {
        tech: () => new techArticleList().render(this.app),
        design: () => new DesignArticleList().render(this.app),
        techArticle: async (id: number | string) => new ArticleView(id, 'tech').render(this.app),
        designArticle: async (id: number | string) => new ArticleView(id, 'design').render(this.app),
        notFoundComponent: () => new notFoundPage().render(this.app),
    };

    setupRoutes() {
        this.router
            .addRoute("/", this.components.tech)
            .addRoute("/tech", this.components.tech)
            .addRoute("/design", this.components.design)
            .addRoute("/tech/article/:id", this.components.techArticle)
            .addRoute("/design/article/:id", this.components.designArticle)
            .setNotFound(this.components.notFoundComponent)
            .start();
    }
}