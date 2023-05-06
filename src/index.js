import { CreateRouter } from './router.js';
import tech from './techArticleList.js';
import design from "./designArticleList.js";
import articleView from "./articleView.js";

const router = new CreateRouter();
const app = document.querySelector('#app');

const components = {
  tech: () => (new tech().render(app)),
  design: () => (new design().render(app)),
  article: (id) => (new articleView(id).render(app)),
  notFoundComponent: () => (app.innerText = '404 Not Found'),
};

router
  .addRoute('/', components.tech)
  .addRoute('/tech', components.tech)
  .addRoute('/design', components.design)
  .addRoute('/article/:id', components.article)
  .setNotFound(components.notFoundComponent)
  .start();
