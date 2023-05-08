import { rest } from "msw";
import { articles } from "./articles";

const handlers = [
  rest.get("/design/articles", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(articles)
    );
  })
];

export { handlers };
