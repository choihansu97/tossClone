import {CreateRouter} from "./router";
import "./assets/styles/app.css";
import "./components/header/header";
import "./components/footer/footer";
import techArticleList from "./techArticleList.js";
import DesignArticleList from "./designArticleList.js";
import ArticleView from "./articleView.js";
import notFoundPage from './pages/notFoundPage';


const router = new CreateRouter();

const app = document.querySelector("#app") as HTMLElement;

if (app) {
    const header = document.createElement("app-header");
    app.before(header);

    const footer = document.createElement("app-footer");
    app.after(footer);
}

const components = {
    tech: () => new techArticleList().render(app),
    design: () => new DesignArticleList().render(app),
    techArticle: (id) => new ArticleView(id, 'tech').render(app),
    designArticle: (id) => new ArticleView(id, 'design').render(app),
    notFoundComponent: () => (new notFoundPage().render(app)),
};

if(router instanceof HTMLElement) {
    router
    .addRoute("/", components.tech)
    .addRoute("/tech", components.tech)
    .addRoute("/design", components.design)
    .addRoute("/tech/article/:id", components.techArticle)
    .addRoute("/design/article/:id", components.designArticle)
    .setNotFound(components.notFoundComponent)
    .start();
}
