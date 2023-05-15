import {CreateRouter} from "./router.js";
import "./assets/styles/app.css";
import tech from "./techArticleList.js";
import design from "./designArticleList.js";
import articleView from "./articleView.js";
import notFoundPage from './pages/notFoundPage';

const router = new CreateRouter();

const app = document.querySelector("#app");

const components = {
    tech: () => new tech().render(app),
    design: () => new design().render(app),
    techArticle: (id) => new articleView(id, 'tech').render(app),
    designArticle: (id) => new articleView(id, 'design').render(app),
    notFoundComponent: () => (new notFoundPage().render(app)),
};

router
.addRoute("/", components.tech)
.addRoute("/tech", components.tech)
.addRoute("/design", components.design)
.addRoute("/tech/article/:id", components.techArticle)
.addRoute("/design/article/:id", components.designArticle)
.setNotFound(components.notFoundComponent)
.start();
