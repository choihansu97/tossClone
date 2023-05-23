import { rest } from "msw";
import { techArticles, designArticles } from "./articles";

export const handlers = [
  rest.get("/api/tech/articles", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(techArticles));
  }),

  rest.get("/api/design/articles", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(designArticles));
  }),

  rest.get("/api/tech/articles/:id", (req, res, ctx) => {
    const { id } = req.params;
    const filteredArticleParams = techArticles.find((article) => article.id == id);

    if(filteredArticleParams) {
      return res(ctx.status(200), ctx.json(filteredArticleParams));
    }
  }),

  rest.get("/api/design/articles/:id", (req, res, ctx) => {
    const { id } = req.params;
    const filteredArticleParams = designArticles.find((article) => article.id == id);

    if(filteredArticleParams) {
      return res(ctx.status(200), ctx.json(filteredArticleParams));
    }

  }),
];
