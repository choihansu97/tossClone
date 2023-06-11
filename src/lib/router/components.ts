import { CreateRouter } from "./router";
import techArticleList from "../../pages/article/techArticleList";
import DesignArticleList from "../../pages/article/designArticleList";
import ArticleView from "../../pages/article/articleView";
import notFoundPage from "../../pages/notFoundPage";

export default class Routes {
    private router: CreateRouter;
    private app: HTMLElement;

    private components = {
        tech: () => new techArticleList().render(this.app),
        design: () => new DesignArticleList().render(this.app),
        techArticle: async (id: number | string) =>
            new ArticleView(id, "tech").render(this.app),
        designArticle: async (id: number | string) =>
            new ArticleView(id, "design").render(this.app),
        notFoundComponent: () => new notFoundPage().render(this.app),
    };

    constructor(app: HTMLElement) {
        this.router = new CreateRouter();
        this.app = app;
        this.setupRoutes();
    }

    private setupRoutes() {
        this.router
            .addRoute("/", this.components.tech)
            .addRoute("/tech", this.components.tech)
            .addRoute("/design", this.components.design)
            .addRoute("/tech/article/:id", (params: { id: number | string }) => this.components.techArticle(params.id))
            .addRoute("/design/article/:id", (params: { id: number | string }) => this.components.designArticle(params.id))
            .setNotFound(this.components.notFoundComponent)
            .start();
    }
}
