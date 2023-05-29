import {CreateRouter} from "./router";
import "./assets/styles/app.css";
import "./components/header/header";
import "./components/footer/footer";
import techArticleList from "./techArticleList";
import DesignArticleList from "./designArticleList";
import ArticleView from "./articleView";
import notFoundPage from './pages/notFoundPage';


const router = new CreateRouter();

const app = document.querySelector("#app") as HTMLElement;

const header = document.createElement("app-header");
app.before(header);

const footer = document.createElement("app-footer");
app.after(footer);

const components = {
    tech: () => new techArticleList().render(app),
    design: () => new DesignArticleList().render(app),
    techArticle: async (id: number | string) => new ArticleView(id, 'tech').render(app),
    designArticle: async (id: number | string) => new ArticleView(id, 'design').render(app),
    notFoundComponent: () => new notFoundPage().render(app),
};

router
    .addRoute("/", components.tech)
    .addRoute("/tech", components.tech)
    .addRoute("/design", components.design)
    .addRoute("/tech/article/:id", components.techArticle)
    .addRoute("/design/article/:id", components.designArticle)
    .setNotFound(components.notFoundComponent)
    .start();
