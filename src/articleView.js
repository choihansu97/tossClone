import HttpClient from "../http";
import AbstractView from "./abstractView";
import { ArticleDto } from "./dto/articleDto";

export default class extends AbstractView {
  url = "http://localhost:3000";

  constructor(id) {
    super();
    this.id = id;
  }

  async setup() {
    const client = new HttpClient({ baseUrl: this.url });
    const response = await client.get({ path: `/articles/:id`, requestParams: this.id });
    const articleView = new ArticleDto(response.data.id, response.data.thumbnail, response.data.title, response.data.content, response.data.createDate);

    document.title = articleView.title;
    return articleView;
  }

  template(articleView) {
    let articleHtml = `
          <div>
          <p>${articleView.id}</p>
          <img src="${articleView.thumbnail}" alt="${articleView.title}">
          <h2>${articleView.title}</h2>
          <p>${articleView.content}</p>
          <p>${articleView.createDate}</p>
      </div>
    `;

    return `
    <main>
      ${articleHtml}
    </main>
  `;
  }

  async render(target) {
    const articleView = await this.setup();
    if (target) {
      target.innerHTML = await this.template(articleView);
    }
  }
}