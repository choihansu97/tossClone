import { rest } from "msw";
import { articles } from "./articles";

export const handlers = [
  rest.get("/api/articles", (req, res, ctx) => {
    const category = req.url.searchParams.get("category");
    const filteredArticles = articles.filter(
      (article) => article.category === category
    );
    return res(ctx.status(200), ctx.json(filteredArticles));
  }),

  rest.get("/api/articles/:id", (req, res, ctx) => {
    const { id } = req.params;
    const filteredArticleParams = articles.find((article) => article.id == id);
    return res(ctx.status(200), ctx.json(filteredArticleParams));
  }),
];
