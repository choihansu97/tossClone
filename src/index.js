import { CreateRouter } from "./router.js";
import "./components/header/header";
import "./components/footer/footer";
import tech from './techArticleList.js';
import design from "./designArticleList.js";
import articleView from "./articleView.js";

const router = new CreateRouter();
const app = document.querySelector("#app");

const header = document.createElement("app-header");
app.before(header);

const footer = document.createElement("app-footer");
app.after(footer);

const components = {
  tech: () => (new tech().render(app)),
  design: () => (new design().render(app)),
  article: (id) => (new articleView(id).render(app)),
  notFoundComponent: () => (app.innerHTML = "404 Not Found")
};

router
  .addRoute("/", components.tech)
  .addRoute("/tech", components.tech)
  .addRoute("/design", components.design)
  .addRoute("/article/:id", components.article)
  .setNotFound(components.notFoundComponent)
  .start();